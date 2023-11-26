import { useState } from "react";
import ColorSelector from "./components/ColorSeletor";

function App() {
  const [colorName, setColorName] = useState("bg-black");
  const handleClick = (colortype) => {
    setColorName(colortype);
  };

  return (
    <div className={`p-4 h-screen w-full text-white ${colorName}`}>
      <ColorSelector handleClick={handleClick} />
    </div>
  );
}

export default App;
