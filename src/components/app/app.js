import React from "react";
import "./app.css";
import withBookstoreService from "../HOC";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <div />;
};

export default withBookstoreService()(App);
