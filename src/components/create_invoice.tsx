import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./home";

// Define types for the items in the invoice
interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
}

interface InvoiceData {
  customerName: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  items: InvoiceItem[];
  notes: string;
}

const CreateInvoice: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    customerName: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    items: [
      {
        description: "",
        quantity: 1,
        rate: 0,
      },
    ],
    notes: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: keyof InvoiceItem // Allow only valid keys from InvoiceItem
  ) => {
    const { name, value } = e.target;

    if (typeof index === "number" && field) {
      const updatedItems = [...invoiceData.items];
      (updatedItems[index][field] as string | number) = field === "quantity" || field === "rate" ? +value : value;
      setInvoiceData({
        ...invoiceData,
        items: updatedItems,
      });
    } else {
      setInvoiceData({
        ...invoiceData,
        [name]: value,
      });
    }
  };

  const handleAddItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: "", quantity: 1, rate: 0 }],
    });
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData({
      ...invoiceData,
      items: updatedItems,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Invoice Data:", invoiceData);
    alert("Invoice created successfully!");
    // Add logic to save or send invoice data
  };

  return (
    <MainLayout>
      <div className="flex-1 p-4 overflow-y-auto transition-all duration-500 ease-in-out">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center animate__animated animate__fadeIn">
          Create Invoice
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 animate__animated animate__fadeInUp">
          <div>
            <label className="block text-gray-600 mb-1">Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={invoiceData.customerName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                value={invoiceData.invoiceNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                value={invoiceData.invoiceDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={invoiceData.dueDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                required
              />
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mt-6">Items</h2>
          {invoiceData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-3 items-center mb-4">
              <input
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleInputChange(e, index, "description")}
                className="p-2 border border-gray-300 rounded-md col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                required
              />
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleInputChange(e, index, "quantity")}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                required
              />
              <input
                type="number"
                placeholder="Rate"
                value={item.rate}
                onChange={(e) => handleInputChange(e, index, "rate")}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveItem(index)}
                className="text-red-500 font-bold hover:scale-105 transition-all text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddItem}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm"
          >
            Add Item
          </button>

          <div>
            <label className="block text-gray-600 mb-1">Notes</label>
            <textarea
              name="notes"
              value={invoiceData.notes}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              rows={3}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm"
            >
              Save Invoice
            </button>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => navigate("/view-templates")}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all duration-300 ease-in-out text-sm"
              >
                View Templates
              </button>
              <button
                type="button"
                onClick={() => navigate("/send-invoice")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm"
              >
                Send Invoice
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default CreateInvoice;
