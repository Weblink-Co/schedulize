import React from "react";
import { SigninForm } from "forms/auth";
import Link from "next/link";

export default function() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
      <p className="text-gray-400 mb-8">
        Log in to your account and get back to scheduling meetings with ease.
      </p>
      <SigninForm />
      <p className="text-gray-400 text-center text-sm mt-8">Don't have account yet? <Link href="#" className="text-primary-foreground underline">Create now!</Link></p>
    </>
  )
}
