"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const pathname = usePathname();

  const LogOut = (
    <Link href="/">
      <Button
        text="LogOut"
        width="w-32"
        onClick={() => {
          logout();
          console.log("Logged Out");
        }}
      />
    </Link>
  );

  const GoToDashboard = (
    <Link href="/dashboard">
      <Button text="Go To Dashboard" />
    </Link>
  );

  return (
    <div className="flex justify-between p-2">
      <div className="textGradient fugaz text-2xl ">
        <Link href="/">Moodly</Link>
      </div>
      {currentUser && pathname == "/dashboard" ? LogOut : null}
      {currentUser && pathname == "/" ? GoToDashboard : null}
    </div>
  );
}
