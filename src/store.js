import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";  // исходный код - 14 строк
import reducer from "./reducers";

const logMiddleware = ({ getState }) => next => action => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddleware = () => next => action => {
  if (typeof action === "string") {
    return next({ type: action });
  }
  return next(action);
};

// thunkMiddleware используется для того, чтобы была возможность передавать
// в dispatch не только action, но и функцию (например, myAction ниже)
// удобно для описания асинхронных процессов в виде action
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

const myAction = dispatch => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION"
      }),
    2000
  );
};

// функция, создающая action типа myAction с задержкой:
const delayedActionCreator = (delay) => dispatch => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION"
      }),
    delay
  );
};

// store.dispatch(myAction);
store.dispatch(delayedActionCreator(5000));

//store.dispatch("HELLO_WORLD");

export default store;
