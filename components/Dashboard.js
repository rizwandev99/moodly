"use client";

import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { db } from "@/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Average } from "next/font/google";
import Calendar from "@/components/Calendar";

function Dashboard() {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth();
  const [data, setData] = useState({});
  const [timeRemaining, setTimeRemaining] = useState("0H 0M 0S");
  const [highlights, setHighlights] = useState({
    num_days: 0,
    average_mood: 0,
    time_remaining: "0H 0M 0S",
  });

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return;
    }
    setData(userDataObj);
  }, [currentUser, userDataObj]);

  useEffect(() => {
    if (!currentUser || !userDataObj) return;

    // Calculate number of days with entries
    const numDays = userDataObj.moodEntries
      ? Object.keys(userDataObj.moodEntries).length
      : 0;

    // Calculate average mood
    let totalMood = 0;
    if (userDataObj.moodEntries) {
      totalMood = Object.values(userDataObj.moodEntries).reduce(
        (sum, val) => sum + val,
        0
      );
    }
    const average = numDays > 0 ? (totalMood / numDays).toFixed(1) : 0;

    setHighlights((prev) => ({
      ...prev,
      num_days: numDays,
      average_mood: average,
    }));
  }, [userDataObj]);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      const diff = midnight - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return `${hours}H ${minutes}M ${seconds}S`;
    };

    // Update immediately and then every second
    setTimeRemaining(calculateTimeRemaining());
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!currentUser) {
    return <Login />;
  }

  const moods = {
    "&*@#$": "😭",
    Sad: "🥲",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };

  // Helper function to format labels
  const formatLabel = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  async function handleMoodClick(moodNumber) {
    if (!currentUser) return;

    const date = new Date();
    const dateString = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    try {
      await setDoc(
        doc(db, "users", currentUser.uid),
        {
          moodEntries: {
            [dateString]: moodNumber,
          },
        },
        { merge: true }
      );

      const docSnap = await getDoc(doc(db, "users", currentUser.uid));
      const updatedData = docSnap.data();

      console.log("Updated mood data:", updatedData);
      setUserDataObj(updatedData);
      setData(updatedData);
    } catch (error) {
      console.error("Error saving mood:", error);
    }
  }

  return (
    <div>
      {/* Highlights */}
      <div className="flex justify-around mx-4 my-6 rounded-xl bg-indigo-100">
        {Object.keys(highlights).map((high, highIndex) => {
          return (
            <div
              key={highIndex}
              className="flex flex-col justify-center items-center p-2 text-md text-indigo-600"
            >
              <p className="font-bold">{formatLabel(high)}</p>
              <p className="fugaz  pt-2 text-md ">
                {high === "time_remaining" ? timeRemaining : highlights[high]}
              </p>
            </div>
          );
        })}
      </div>
      {/* Main Message */}
      <h1 className="fugaz text-6xl text-center">
        How do you <span className=" textGradient ">feel</span> today?{" "}
      </h1>
      <div className="flex justify-center items-center pt-6">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <div
              key={moodIndex}
              onClick={() => handleMoodClick(moodIndex)}
              className="flex flex-col p-1 m-4 text-center justify-between align-center bg-indigo-100 rounded-2xl cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-indigo-300"
            >
              <p className="text-8xl">{moods[mood]}</p>
              <p className="pt-4 text-2xl text-indigo-600 fugaz">{mood}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 mx-4">
        <Calendar moodEntries={data.moodEntries || {}} />
      </div>
    </div>
  );
}

export default Dashboard;
