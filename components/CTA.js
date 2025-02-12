"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";
import Button from "./Button";

function CTA() {
  const { currentUser } = useAuth();

  if (currentUser) {
    return (
      <div className="mx-auto py-4">
        <Link href="/dashboard">
          <Button text="Go to Dashboard" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto py-4 flex gap-4 ">
      <Link href="/dashboard">
        <Button text="Sign Up" />
      </Link>
      <Link href="/dashboard">
        <Button text="Login" dark />
      </Link>
    </div>
  );
}

export default CTA;
