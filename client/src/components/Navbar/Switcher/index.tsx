import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import { Box } from "@mui/material";

const Switcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <Box sx={{ textAlign: "center", marginLeft: "2rem" }}>
      <DarkModeSwitch
        checked={theme === "light"}
        onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        size={20}
        moonColor="#031521"
        sunColor="#FAB535"
      />
    </Box>
  );
};

export default Switcher;
