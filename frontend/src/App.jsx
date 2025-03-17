import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CustomerManagement from "./pages/CustomerManagement";
import CustomerStats from "./pages/CustomerStats";
import { CustomerProvider } from "./context/CustomerContext";
import React from 'react'
function App() {
  return (
    <CustomerProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<CustomerManagement />} />
              <Route path="/stats" element={<CustomerStats />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CustomerProvider>
  );
}

export default App;
