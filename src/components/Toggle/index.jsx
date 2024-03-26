import { useTheme } from "../../hooks/useTheme";

import "./style.css";

export const Toggle = () => {
  const [theme, handleChange] = useTheme("light");

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={handleChange}
        checked={theme === "dark"}
      />
      <span className="slider"></span>
    </label>
  );
};
