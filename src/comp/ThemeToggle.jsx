import React from "react";
import { ThemeContext } from "./ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <BsFillSunFill
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-yellow-500 dark:text-yellow-400 text-2xl cursor-pointer"
        />
      ) : (
        <BsFillMoonFill
          size={25}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-blue-900 dark:text-blue-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
