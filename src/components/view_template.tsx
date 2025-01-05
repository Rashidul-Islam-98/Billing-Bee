import React, { useState } from 'react';
import MainLayout from './home';

const ViewTemplate: React.FC = () => {
  const [templateColor, setTemplateColor] = useState('#3498db'); // Default blue color
  const [fontFamily, setFontFamily] = useState('Arial'); // Default font
  const [message, setMessage] = useState(''); // Message to show in the template preview

  // Handle color change
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplateColor(e.target.value);
  };

  // Handle font change
  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  // Handle message change
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Customize Invoice Template</h1>

        {/* Template Preview */}
        <div
          className="p-6 rounded-lg shadow-lg bg-white transition-all duration-500 ease-in-out"
          style={{ backgroundColor: templateColor, fontFamily: fontFamily }}
        >
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">Invoice #12345</h2>
            <p className="text-white mt-2">Date: 01/01/2025</p>
            <p className="text-white">Due: 15/01/2025</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Bill To</h3>
            <p className="text-white">John Doe</p>
            <p className="text-white">123 Main St, Cityville, ST, 12345</p>
            <p className="text-white">Email: john.doe@example.com</p>
          </div>

          {/* Customizable message */}
          <div className="mb-4">
            <textarea
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
              rows={4}
              placeholder="Enter a custom message for the invoice (e.g. Thank you for your business!)"
            />
          </div>
        </div>

        {/* Customization Controls */}
        <div className="space-y-4">
          {/* Color Picker */}
          <div className="flex items-center justify-between">
            <label htmlFor="colorPicker" className="text-gray-700 font-semibold">Template Color:</label>
            <input
              type="color"
              id="colorPicker"
              value={templateColor}
              onChange={handleColorChange}
              className="w-16 h-8 border-none rounded-md"
            />
          </div>

          {/* Font Selector */}
          <div className="flex items-center justify-between">
            <label htmlFor="fontSelector" className="text-gray-700 font-semibold">Font Family:</label>
            <select
              id="fontSelector"
              value={fontFamily}
              onChange={handleFontChange}
              className="w-40 p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            >
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Courier New">Courier New</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>

          {/* Message Input */}
          <div className="flex items-center justify-between">
            <label htmlFor="messageInput" className="text-gray-700 font-semibold">Custom Message:</label>
            <textarea
              id="messageInput"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
              rows={4}
              placeholder="Enter a custom message for the invoice (e.g. Thank you for your business!)"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewTemplate;
