import { fugaz } from "@/app/layout";
import React from "react";
import Button from "./Button";

export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-6">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        Log In / Register
      </h3>
      <p>You&apos;re one step away</p>
      <input
        className="w-full mx-auto max-w-[400px] duration-200 hover:border-indigo-600 focus:border-indigo-600 outline-none border border-solid-400 py-2 px-3 rounded-full "
        placeholder="Email"
      />
      <input
        className="w-full mx-auto max-w-[400px] duration-200 hover:border-indigo-600 focus:border-indigo-600 outline-none border border-solid-400 py-2 px-3 rounded-full "
        placeholder="password"
        type="password"
      />
      <div className="w-full max-w-[400px] mx-auto ">
        <Button full text="submit" />
      </div>
      <p>
        Don&apos;t have an account{" "}
        <span className="text-indigo-600 text-center font-semibold">
          Sign up
        </span>
      </p>
    </div>
  );
}
