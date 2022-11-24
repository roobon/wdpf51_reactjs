import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Garage from "./pages/Garage";
import Contact from "./pages/Contact";
import Colors from "./components/colors/colors";
import reportWebVitals from "./reportWebVitals";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import UserList from "./users/UserList";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Garage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
