import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useMemo } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import React from "react";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    setDark((prev) => !prev);
  };
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(() => {
    return { isDark, toggleDark };
  }, [isDark]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a NameProvider");
  return context;
};
