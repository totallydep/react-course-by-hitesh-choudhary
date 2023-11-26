import { useState, useEffect, useCallback, useRef } from "react";
import PasswordGene from "./components/PasswordGene";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // function (for generating the password)
  const generatePassword = useCallback(() => {
    let pass = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const char = "!@#$%^&*()_";

    for (let i = 1; i <= length; i++) {
      let randomType = Math.floor(Math.random() * 3);

      if (randomType === 1 && numbersAllowed) {
        pass += num.charAt(Math.floor(Math.random() * num.length));
      } else if (randomType === 2 && charAllowed) {
        pass += char.charAt(Math.floor(Math.random() * char.length));
      } else {
        pass += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
    }
    setPassword(pass);
    // console.log(`Generated Password: ${password}`);
  }, [length, numbersAllowed, charAllowed, setPassword]);

  // function (for copy password to clipboard)
  const copyToClipboard = useCallback(() => {
    // here "?" works as optionally (will not work if its null or undefined)
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // console.log(`Copied Password: ${password}`);
  }, [password]);

  // useEffect Hook
  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charAllowed]);

  return (
    <div className="bg-gray-800 text-white flex h-screen w-full justify-center items-center">
      <PasswordGene
        length={length}
        setLength={setLength}
        numbersAllowed={numbersAllowed}
        setNumbersAllowed={setNumbersAllowed}
        charAllowed={charAllowed}
        setCharAllowed={setCharAllowed}
        password={password}
        passwordRef={passwordRef}
        copyToClipboard={copyToClipboard}
      />
    </div>
  );
}

export default App;
