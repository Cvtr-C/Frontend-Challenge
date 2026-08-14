import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ErrorTextEnum } from "../enums/error-text.enum";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(ErrorTextEnum.THEMEPROVIDER_USETHEM);
  }

  return context;
}
