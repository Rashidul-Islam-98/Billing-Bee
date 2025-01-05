import React, { useState } from "react";
import Navbar from "../navbar";

const AddItem: React.FC = () => {
  const [formData, setFormData] = useState({
    itemCode: "",
    itemName: "",
    itemGroup: "",
    isFromHub: false,
    defaultUnit: "Nos",
    openingStock: "",
    valuationRate: "",
    standardSellingRate: "",
    maintainStock: true,
    includeInManufacturing: true,
    allowAlternative: false,
    disabled: false,
    isFixedAsset: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
  
    // Check if the target is an HTMLInputElement and handle 'checked' for checkboxes
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="h-screen flex flex-col">
  <Navbar />

  <div className="w-full max-w-screen-2xl bg-white shadow-lg rounded-lg p-10">
    <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">Add New Item</h1>
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Item Code and Name */}
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-gray-600 mb-1">
            Item Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="itemCode"
            value={formData.itemCode}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
          />
        </div>
      </div>

      {/* Item Group and Default Unit */}
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-gray-600 mb-1">
            Item Group <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="itemGroup"
            value={formData.itemGroup}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">
            Default Unit of Measure <span className="text-red-500">*</span>
          </label>
          <select
            name="defaultUnit"
            value={formData.defaultUnit}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            required
          >
            <option value="Nos">Nos</option>
            <option value="Kg">Kg</option>
            <option value="Ltr">Ltr</option>
          </select>
        </div>
      </div>

      {/* Additional fields omitted for brevity */}

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default AddItem;
