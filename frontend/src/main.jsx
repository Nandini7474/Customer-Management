import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CustomerManagement from "./pages/CustomerManagement";
import CustomerStats from "./pages/CustomerStats";
import "./index.css"; // Ensure Tailwind is included
import { CustomerProvider } from "./context/CustomerContext"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<CustomerManagement />} />
            <Route path="/stats" element={<CustomerStats />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
