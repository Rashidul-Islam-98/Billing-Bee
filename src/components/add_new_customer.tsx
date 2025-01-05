import React, { useState } from "react";
import MainLayout from "./home";

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const AddCustomer: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Customer Data:", customerData);
    alert("Customer added successfully!");
    // Add logic to save customer data
  };

  return (
    <MainLayout>
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add New Customer</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={customerData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={customerData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={customerData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Address</label>
            <textarea
              name="address"
              value={customerData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all text-sm"
          >
            Add Customer
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default AddCustomer;
