import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";

// реализация того же эффекта с помощью middleware.
// middleware-функции модифицируют внутренний механизм работы dispatch.
// next - это следующий dispatch в цепочке.
// доступ возможен не ко всему store, а только к store.getState() и store.dispatch()
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

/*
реализация того же эффекта с помощью store enhancer
на первый взгляд - то же самое, но:
- удобнее тестировать
- можно выделить в отдельный модуль
- можно использовать композицию нескольких enhancer-ов
*/

/*const stringEnhancer = createStore => (...args) => {
  const store = createStore(...args);

  const originalDispatch = store.dispatch;

  store.dispatch = action => {
    if (typeof action === "string") {
      return originalDispatch({ type: action });
    }
    return originalDispatch(action);
  };

  return store;
};

const logEnhancer = createStore => (...args) => {
  const store = createStore(...args);

  const originalDispatch = store.dispatch;

  store.dispatch = action => {
    console.log(action.type);
    return originalDispatch(action);
  };

  return store;
};

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));*/

/* пример манкипатчинга - так делать крайне нежелательно

const originalDispatch = store.dispatch;

store.dispatch = (action) => {
  if (typeof action === 'string') {
    return originalDispatch({type: action});
  }
  return originalDispatch(action);
}*/

// функция applyMiddleware, по сути, store enhancer
// встроен в redux
const store = createStore(
  reducer,
  applyMiddleware(stringMiddleware, logMiddleware)
);

store.dispatch("HELLO_WORLD");

export default store;
