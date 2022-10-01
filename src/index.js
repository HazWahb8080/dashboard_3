import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navLinks } from "./utils/db";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {navLinks.map((link) => (
          <Route
            key={link.id}
            path={`${link.title}/*`}
            element={link.component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);
