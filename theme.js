// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prevState => !prevState);

  return (
    <Theme.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
