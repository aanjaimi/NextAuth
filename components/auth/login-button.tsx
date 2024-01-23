'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

export interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return (
      <div onClick={handleClick} className="cursor-pointer">
        This is a modal login
      </div>
    );
  }

  return (
    <span onClick={handleClick} className='cursor-pointer'>
      {children}
    </span>
  )
}

export default LoginButton
