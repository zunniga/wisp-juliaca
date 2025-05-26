"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; // Asegúrate de tener estos íconos instalados

export const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full p-2 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Cambiar tema"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-800" />
      )}
    </button>
  );
};

export default ThemeSwitch;