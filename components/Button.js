import { fugaz } from "@/app/layout";
import React from "react";

export default function Button({ text, dark }) {
  return (
    <div
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 " +
        (dark ? "text-white bg-indigo-600" : " text-indigo-600")
      }
    >
      <p
        className={
          "px-6 sm:px-10 py-2 sm:py-3 whitespace-nowrap" + fugaz.className
        }
      >
        {text}
      </p>
    </div>
  );
}
