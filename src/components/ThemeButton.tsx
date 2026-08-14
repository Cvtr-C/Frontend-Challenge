import { useTheme } from "../hooks/useTheme";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} id="Theme-button">
      Theme: {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeButton;
