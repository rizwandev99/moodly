import { fugaz } from "@/app/layout";
import React from "react";

export default function Button({ text, dark, full }) {
  return (
    <div
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 " +
        (dark ? "text-white bg-indigo-600 " : " text-indigo-600 ") +
        (full ? "w-full grid place-items-center " : "")
      }
    >
      <p
        className={
          "px-6 sm:px-10 py-2 sm:py-3 whitespace-nowrap " + fugaz.className
        }
      >
        {text}
      </p>
    </div>
  );
}
