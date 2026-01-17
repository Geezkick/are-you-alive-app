"use client";

import React from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <>{children}</>;
}
