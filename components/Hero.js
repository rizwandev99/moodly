import { fugaz } from "@/app/layout";
import React from "react";

export default function Hero() {
  return (
    <div className="py-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient"> Moodly </span>tracks your{" "}
        <span className="textGradient">daily</span> mood.
      </h1>
    </div>
  );
}