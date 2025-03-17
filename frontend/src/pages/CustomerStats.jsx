import { useState, useEffect } from "react";
import axios from "axios";

const CustomerStats = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/customers")
      .then(response => setCustomers(response.data))
      .catch(error => console.error("Error fetching customers:", error));
  }, []);

  // Compute stats
  const totalCustomers = customers.length;
  const recentCustomers = customers.slice(-5); // Get last 5 added customers

  return (
    <div className="p-12 ">
      <h1 className="text-2xl font-bold mb-4">Customer Statistics</h1>

      {/* Total Customers */}
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold">Total Customers</h3>
        <p className="text-2xl">{totalCustomers}</p>
      </div>

      {/* Recent Customers */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Recent Customers</h3>
        <ul className="space-y-2">
          {recentCustomers.length > 0 ? (
            recentCustomers.map((customer) => (
              <li key={customer.id} className="bg-white p-3 rounded-lg shadow">
                {customer.name} - {customer.email}
              </li>
            ))
          ) : (
            <p>No recent customers.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CustomerStats;
