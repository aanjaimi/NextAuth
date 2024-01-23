import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "../../lib/utils";

const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

interface HeaderPageProps {
  label?: string;
}

const HeaderPage = ({ label }: HeaderPageProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        🔒 Auth
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  )
};

export default HeaderPage;
