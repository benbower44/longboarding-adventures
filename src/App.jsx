import { useState } from 'react'
import './App.css'
import { Login } from "./auth/login";
import { Authorized } from "./views/authorize";
import { Register } from "./auth/register";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./views/applicationViews";
export const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route
      path="*"
      element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      }
    />
  </Routes>
);
};
