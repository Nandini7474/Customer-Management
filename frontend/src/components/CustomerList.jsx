import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";

function CustomerList() {
  const { customers, deleteCustomer } = useContext(CustomerContext);

  return (
    <div className="border rounded-md p-4 shadow">
      {customers.length > 0 ? (
        customers.map((customer) => (
          <div
            key={customer.id}
            className="flex justify-between p-2 border-b items-center"
          >
            <span>{customer.name} - {customer.email}</span>
            <button 
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => deleteCustomer(customer.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No customers found.</p>
      )}
    </div>
  );
}

export default CustomerList;
