"use client";
import { gradients, baseRating, demoData } from "@/utils";
import { useEffect, useState } from "react";

export default function Calendar({ demo = false, moodEntries = {} }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [ratings, setRatings] = useState(moodEntries);

  useEffect(() => {
    setRatings(demo ? baseRating : moodEntries);
  }, [demo, moodEntries]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get number of days in current month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Generate array of dates [1, 2, ..., daysInMonth]
  const datesArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Get first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-2xl p-2 hover:bg-gray-100 rounded"
        >
          ←
        </button>
        <h2 className="text-xl font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-2xl p-2 hover:bg-gray-100 rounded"
        >
          →
        </button>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 justify-items-stretch">
        {/* Days Header */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 p-1"
          >
            {day}
          </div>
        ))}

        {/* Empty cells for days before first day of month */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="p-1" />
        ))}

        {/* Date Cells */}
        {datesArray.map((date) => {
          const dateObj = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            date
          );
          const dateKey = demo
            ? `${date}`
            : `${date}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
          const rating = ratings[dateKey] || 0;
          const colorIndex = Math.min(
            Math.max(rating, 0),
            gradients.indigo.length - 1
          );
          const bgColor = gradients.indigo[colorIndex];

          return (
            <div
              key={dateKey}
              className={`h-8 text-sm p-1 text-center rounded hover:opacity-80 transition-opacity font-medium ${
                rating === 0
                  ? "bg-white text-black border border-indigo-600"
                  : "text-white"
              }`}
              style={rating !== 0 ? { backgroundColor: bgColor } : {}}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
}
