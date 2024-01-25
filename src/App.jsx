import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoWrapper from "./components/TodoWrapper";

library.add(fab);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoWrapper />
    </>
  );
}

export default App;
