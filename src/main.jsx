import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";

import { Timeline } from "./pages/Timeline";
import { Home } from "./pages/Home";

import "./i18n/config";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
