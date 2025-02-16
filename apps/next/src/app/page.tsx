"use client";

import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center bg-yellow-500 p-4">
        <Button text="Click me" onClick={() => console.log("Button clicked")} />
      </main>
    </div>
  );
}
