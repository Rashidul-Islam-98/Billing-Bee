import React, { useState } from "react";
import MainLayout from "./home";

const ImportCustomer: React.FC = () => {
  const [importOption, setImportOption] = useState<string>("csv");

  const handleImportOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setImportOption(e.target.value);
  };

  const handleImport = () => {
    console.log("Importing customers with option:", importOption);
    // Add logic to handle the importing of customers
    alert("Import initiated!");
  };

  return (
    <MainLayout>
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Import Customer</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Choose Import Method</label>
            <select
              value={importOption}
              onChange={handleImportOptionChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="csv">Import from CSV</option>
              <option value="json">Import from JSON</option>
              <option value="excel">Import from Excel</option>
            </select>
          </div>
          <button
            onClick={handleImport}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all text-sm"
          >
            Import
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ImportCustomer;
