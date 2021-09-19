import { createContext, useReducer } from "react";
import { initialToDoState, toDoReducer } from "../Reducer/Reducer";

export const ToDoContext = createContext();

const { Provider } = ToDoContext;

const ToDoProvider = ({ children = null }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(toDoReducer, initialToDoState);
  const value = { state, dispatch }
  return <Provider value={value}>{children}</Provider>
}

export default ToDoProvider
