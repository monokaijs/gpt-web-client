import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import Home from "./Home";

export default function AppViews() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
