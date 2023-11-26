//  darkMode: "class",
// 👆 add the above line to the tailwind config file.

import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="bg-indigo-400/40 min-h-screen flex flex-col justify-center items-center dark:bg-gray-950 transition-all duration-300">
        <div className="max-w-sm p-6 bg-white dark:bg-yellow-900/60 rounded-md shadow-md">
          <ThemeBtn />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
