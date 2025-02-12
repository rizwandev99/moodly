import React from "react";
import Button from "./Button";
import CTA from "./CTA";
import Calendar from "./Calendar";

function Hero() {
  return (
    <div className="flex flex-col mt-32">
      {/* Main Heading */}
      <div className="text-6xl text-center">
        <div>
          <span className="textGradient fugaz">Moodly</span> helps you track
          your
        </div>
        <div className="pt-2">
          <span className="textGradient fugaz">Daily </span>
          mood
        </div>
      </div>

      {/* Below Text */}
      <div className="text-center text-2xl pt-3">
        <div>Create your mood record and see how you feel on </div>
        <div className="font-bold">every day of year.</div>
      </div>

      {/* Call to Action */}
      <CTA />

      {/* Add Calendar with demo data */}
      <div className="mx-auto mt-8 w-full max-w-2xl">
        <Calendar demo={true} />
      </div>
    </div>
  );
}

export default Hero;
