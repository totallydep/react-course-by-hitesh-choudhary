import React from "react";

const PasswordGene = ({
  length,
  setLength,
  numbersAllowed,
  setNumbersAllowed,
  charAllowed,
  setCharAllowed,
  password,
  passwordRef,
  copyToClipboard,
}) => {
  return (
    <div>
      <h1 className="text-center font-thin text-4xl my-3 ">
        Password Generator
      </h1>
      <div>
        <input
          type="text"
          className="p-1 rounded mx-2 text-black focus:outline-none focus:bg-yellow-400"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="hover:bg-cyan-700 bg-yellow-700 p-1 rounded"
        >
          Copy
        </button>
      </div>

      <div className="m-4 border-2 rounded p-4">
        <div className="flex gap-2 align-middle">
          <label>Length</label>
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex gap-1 align-middle">
          <input
            type="checkbox"
            checked={numbersAllowed}
            onChange={() => setNumbersAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>

        <div className="flex gap-1 align-middle">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGene;
