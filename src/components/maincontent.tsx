import React from 'react';

const MainContent: React.FC = () => {
  const contentSections = [
    'Invoice Create',
    'Invoice Manager',
    'Customer Create',
    'Customer Manage',
    'Customer Details',
    'Daily Work Progress',
    'Item Creation',
  ];

  return (
    <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Your Shortcuts</h2>
      <div className="grid grid-cols-2 gap-4">
        {contentSections.map((section, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow rounded-md hover:shadow-lg transition"
          >
            {section}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
