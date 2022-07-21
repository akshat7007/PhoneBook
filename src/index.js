import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);

// CHALLENGE: Contact List Application
// Create a ReactJS application that mimics the functionality of a contact list.

// Requirements:

// A contract should consist of a firstName, lastName, email, image
// - A list of all contacts should be displayed in a list on the home page (firstName and lastName and image only)
// - Add a delete button/icon at the right side of the list item, on click of it, the item should be deleted from the list (No need to call the API to delete item)

// Design Reference:
// 1. http://prntscr.com/wa4302 (Design is just for reference, you can design how you like)
// API Reference: https://reqres.in
// Contact list API: https://reqres.in/api/users

// Must use: Redux, latest version of ReactJS with functional components and react hooks
// - Use react-router-dom to implement the routes
