import React, { createContext, useContext, useState, useEffect } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light"; // Default to "light" if no saved theme
  });

  // Sync theme with localStorage and system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference if no saved theme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Toggle theme between light, dark, and system
  const toggleTheme = () => {
    setTheme((prev) => {
      let newTheme;
      if (prev === "light") {
        newTheme = "dark";
      } else if (prev === "dark") {
        newTheme = "system";
      } else {
        newTheme = "light";
      }
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Apply theme classes to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
    } else if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};