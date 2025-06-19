import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";
import TodoUi from "./components/TodoUi";

import RegistrationPage from "./components/RegistrationPage";
import ErrorPage from "./components/ErrorPage";

import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <br />
          <Routes>
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/Todo" element={<TodoUi />} />

            <Route path="/*" element={<ErrorPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
