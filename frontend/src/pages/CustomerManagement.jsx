import { useState, useEffect } from "react";
import axios from "axios";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/customers")
      .then(response => setCustomers(response.data))
      .catch(error => console.error("Error fetching customers:", error));
  }, []);

  const handleAddCustomer = () => {
    if (!name || !email || !contact) return;
    
    const newCustomer = { name, email, contact };

    axios.post("http://localhost:5000/customers", newCustomer)
      .then(response => {
        setCustomers([...customers, response.data]);
        setName("");
        setEmail("");
        setContact("");
      })
      .catch(error => console.error("Error adding customer:", error));
  };

  const handleDeleteCustomer = (id) => {
    axios.delete(`http://localhost:5000/customers/${id}`)
      .then(() => setCustomers(customers.filter(cust => cust.id !== id)))
      .catch(error => console.error("Error deleting customer:", error));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Customer Form */}
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Customer Management</h1>
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="p-2 border border-gray-300 rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="p-2 border border-gray-300 rounded"
          />
          <input 
            type="text" 
            placeholder="Contact Number" 
            value={contact} 
            onChange={(e) => setContact(e.target.value)} 
            className="p-2 border border-gray-300 rounded"
          />
          <button 
            onClick={handleAddCustomer} 
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Customer
          </button>
        </div>
      </div>

      {/* Customer List */}
      <div className="mt-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {customers.map(customer => (
          <div key={customer.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{customer.name}</p>
              <p className="text-gray-600">{customer.email}</p>
              <p className="text-gray-500">📞 {customer.contact}</p>
            </div>
            <button 
              onClick={() => handleDeleteCustomer(customer.id)} 
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerManagement;
