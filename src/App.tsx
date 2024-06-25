import { useState } from "react";
import { css } from "../styled-system/css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
