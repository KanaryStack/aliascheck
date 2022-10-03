import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

const index = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      <DarkModeSwitch
        checked={theme === "light"}
        onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        size={36}
        moonColor="#09334F"
        sunColor="#FAB535"
      />
    </div>
  );
};

export default index;
