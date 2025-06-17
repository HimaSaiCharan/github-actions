import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        The Count is - {count}
      </button>
    </>
  );
};

export default App;
