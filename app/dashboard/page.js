import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";
import React from "react";

export default function DashboardPage() {
  const isAuthenticated = false;

  let children = isAuthenticated ? <Dashboard /> : <Login />;

  return <Main>{children}</Main>;
}
//
