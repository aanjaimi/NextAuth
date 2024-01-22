import React from "react";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center font-bold text-[30px]">
      Hello World
      <Button>
        Get Started
      </Button>
    </div>
  );
}
