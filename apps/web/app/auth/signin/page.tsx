import React from "react";
import { SigninForm } from "forms/auth";

export default function() {
  return (
    <>
      <h2 className="text-3xl font-bold">Welcome Back!</h2>
      <p className="text-gray-400 mb-6">To continue please sign in first</p>
      <SigninForm />
    </>
  )
}
