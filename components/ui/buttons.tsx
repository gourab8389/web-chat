"use client"

import { signIn, signOut } from "next-auth/react"


import { ButtonHTMLAttributes, FC } from "react";

import { MouseEventHandler } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: FC<ButtonProps> = ({ label, size = "medium", variant = "primary", onClick, ...props }) => {
  const baseClasses = "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  
  const variantClasses = {
    primary: "bg-fuchsia-700 text-white hover:bg-fuchsia-800 focus:ring-blue-300",
    secondary: "bg-fuchsia-500 text-white hover:bg-fuchsia-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  return (
    <button
      onClick={() => {}}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
      {...props}
    >
      {label}
    </button>
  );
};







export const LogoutButton = () => {
  return (
    <button onClick={() => signOut()} className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base">
        Logout
    </button>
  )
}


export const LoginButton = () => {
    return (
        <button onClick={() => signIn()} className="flex items-center justify-center gap-2 rounded-lg bg-fuchsia-700 px-8 py-3 text-center text-sm font-semibold text-white ring-fuchsia-500 transition duration-100 hover:bg-fuchsia-900 md:text-base">
            Login
        </button>
    )
}
