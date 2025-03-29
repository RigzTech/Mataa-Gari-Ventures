<<<<<<< HEAD
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light"); // Persist theme
      return newMode;
    });
  };

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark" || !savedTheme); // Default to dark if no saved theme
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
=======
import React, { createContext, useContext, useState, useEffect } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Set the theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light"); // default to light theme
    }
  }, []);

  // Toggle theme between light, dark, and system
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("system");
      localStorage.setItem("theme", "system");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
>>>>>>> c74ef82e41a740f0a26d6565727d664c73e75302
      {children}
    </ThemeContext.Provider>
  );
};
<<<<<<< HEAD

export const useTheme = () => useContext(ThemeContext);
=======
>>>>>>> c74ef82e41a740f0a26d6565727d664c73e75302
