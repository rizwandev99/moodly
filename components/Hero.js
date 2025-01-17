import { fugaz } from "@/app/layout";
import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="py-10 flex flex-col gap-4 sm:gap-8">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient"> Moodly </span>tracks your{" "}
        <span className="textGradient">daily</span> mood.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center ">
        Create your mood record and see how you feel{" "}
        <span className="font-medium">every day of every year. </span>{" "}
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto ">
        <Button text="Login" />
        <Button text="Sign-up" dark />
      </div>
    </div>
  );
}