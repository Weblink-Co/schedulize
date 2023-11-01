import React from "react";

export default function({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <main className="max-w-full w-[20rem]">
        {children}
      </main>
    </div>
  )

}
