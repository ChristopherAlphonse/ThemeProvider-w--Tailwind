import React from "react";
import { ThemeContext } from "./ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const icon =
    theme === "light" ? (
      <BsFillMoonFill size={30} color="#000080" />
    ) : (
      <BsFillSunFill size={30} color="#c69f26" />
    );

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      <button onClick={changeTheme}>{icon}</button>
    </div>
  );
};

export default Toggle;
