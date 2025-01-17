import React from "react";
import Hero from "./Hero";
import { fugaz } from "@/app/layout";

export default function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };
  const moods = {
    "&*@#$": "😭",
    Sad: "🥲",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };
  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div
              key={statusIndex}
              className="flex flex-col gap-1 sm:gap-2 p-2 sm:p-4"
            >
              <p className="font-medium uppercase text-xs sm:text-sm truncate ">
                {status.replaceAll("_", " ")}
              </p>
              <p className={"text-sm sm:text:lg " + fugaz.className}>
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h4 className={"text-5xl sm:text-6xl md:text-7xl " + fugaz.className}>
        How do you <span className={"textGradient "}>feel</span> today?
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              className={
                "py-4 purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 " +
                (moodIndex === 4 ? "sm:col-span-2 md:col-span-1" : " ")
              }
              key={moodIndex}
            >
              <p
                className={
                  "text-5xl sm:text-6xl md:text-7xl " + fugaz.className
                }
              >
                {moods[mood]}
              </p>
              <p
                className={
                  "text-indigo-800 text-xs sm:text-sm md:text-base pt-4  " +
                  fugaz.className
                }
              >
                {mood}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
