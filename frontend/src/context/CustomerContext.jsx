import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CustomerContext = createContext();

// Custom Hook to use the context
export function useCustomer() {
  return useContext(CustomerContext);
}

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  // Fetch customers from JSON Server
  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/customers");
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    }
    fetchCustomers();
  }, []);
   // Compute statistics
   const totalCustomers = customers.length;
   const recentCustomers = customers.slice(-5); // Last 5 added customers
  return (
    <CustomerContext.Provider value={{ customers, setCustomers ,totalCustomers, recentCustomers  }}>
      {children}
    </CustomerContext.Provider>
  );
}
