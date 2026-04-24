import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`container ${theme}`}>
      <h1>Welcome to My Experiment 4 Project</h1>
      <p>
        This project demonstrates useContext, useReducer, and useMemo.
      </p>
      <p>Developed by Manish yadav </p>
    </div>
  );
}

export default Home;
