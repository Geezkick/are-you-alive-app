"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: "default" | "outline" | "destructive";
  size?: "default" | "lg" | "xl";
}

export function Button({
  children,
  loading,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";
  
  const variants = {
    default: "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl",
    destructive: "bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700",
    outline: "border-2 border-pink-500/30 text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/50",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-11 rounded-xl px-8",
    xl: "h-14 rounded-xl px-10 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
