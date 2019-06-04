import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookstoreService();

/*
class App extends Component {
  state = {
    bookstoreService: new BookstoreService(),
  };
  render() {
    const { bookstoreService } = this.state;

    return (
      <ErrorBoundary>
        <BookstoreServiceProvider value={bookstoreService}>
          {`hello`}
        </BookstoreServiceProvider>
      </ErrorBoundary>
    );
  }
 */

render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
/*
стандартная структура react-redux приложения
гарантирует, что любые компоненты внутри App будут иметь доступ к роутеру, сервису и хранилищу, а также, что любые ошибки будут отлавливаться
*/
