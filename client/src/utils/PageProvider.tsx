import { ThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { theme, darkTheme, lightTheme } from "./theme";

interface PageProvidersProps {
  children: ReactNode;
}

const PageProvider = ({ children }: PageProvidersProps) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PageProvider;
