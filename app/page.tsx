import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import LoginButton from "../components/auth/login-button";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main className="bg h-full flex flex-col items-center justify-center font-bold text-[30px]">
      <div className="flex flex-col items-center space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Authentication
        </h1>
        <p className="text-white text-lg">
          This is a simple authentication app built with Next.js 14 and NextAuth
        </p>
        <div>
          <LoginButton>
            <Button variant={"outline"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
