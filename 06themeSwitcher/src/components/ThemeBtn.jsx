import useTheme from "../contexts/theme";

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeTheme = (e) => {
    if (themeMode === "light") darkTheme();
    else lightTheme();
  };

  return (
    <button
      onClick={(e) => onChangeTheme(e)}
      className="px-4 py-2 text-white bg-teal-700 hover:bg-teal-900 rounded-md transition-all duration-300 dark:bg-gray-800 dark:hover:bg-teal-800"
    >
      {themeMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeBtn;
