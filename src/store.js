import { createStore, compose } from "redux";
import reducer from "./reducers";

/*
реализация того же эффекта с помощью store enhancer
на первый взгляд - то же самое, но:
- удобнее тестировать
- можно выделить в отдельный модуль
- можно использовать композицию нескольких enhancer-ов
*/

const stringEnhancer = createStore => (...args) => {
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

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

/* пример манкипатчинга - так делать крайне нежелательно

const originalDispatch = store.dispatch;

store.dispatch = (action) => {
  if (typeof action === 'string') {
    return originalDispatch({type: action});
  }
  return originalDispatch(action);
}*/

store.dispatch("HELLO_WORLD");

export default store;
