"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { currentUser } = useAuth();

  const { signup, login } = useAuth();

  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser, router]);

  async function handleSubmit() {
    if (!email || !password || password.length < 4) {
      console.log("Please add all the details & Password length be atleast 4");
      return;
    }

    try {
      if (isLogin) {
        await login(email, password);
        console.log("Login");
      } else {
        await signup(email, password);
        console.log("SignUp");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 pt-12 ">
      <h1 className="text-6xl fugaz ">{isLogin ? "Log In " : "Sign up"}</h1>
      <p className="text-lg">You&apos;re one step away!</p>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
        type="text"
        className="border-2 border-indigo-600 rounded-full py-2 px-4 w-1/2"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        type="password"
        className="border-2 border-indigo-600 rounded-full py-2 px-4 w-1/2"
      />
      <Button text="Submit" width="w-1/2" onClick={handleSubmit} />
      <p>
        {isLogin ? "Don't have an account ? " : "Already have an account "}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="cursor-pointer text-indigo-600"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </span>
      </p>
    </div>
  );
}

export default Login;
