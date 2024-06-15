import { useState } from "react";
import Introduction from "../components/Introduction";

const App = () => {
  const [welcome, setWelcome] = useState(true);

  function handleClick() {
    setWelcome((prevState) => !prevState);
  }
  return (
    <div>
      <main className="main">
        {welcome ? <Introduction handleClick={handleClick} /> : null}
      </main>
    </div>
  );
};

export default App;
