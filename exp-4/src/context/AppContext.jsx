import { createContext, useReducer, useState } from "react";
import { appReducer } from "../reducer/appReducer";

export const AppContext = createContext();

const initialState = {
  tasks: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider value={{ state, dispatch, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
