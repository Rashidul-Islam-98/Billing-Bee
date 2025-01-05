import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FcDocument,
  FcAreaChart,
  FcApprove,
  FcFinePrint,
  FcCollaboration,
  FcContacts,
  FcInTransit,
} from 'react-icons/fc';

const Sidebar: React.FC = () => {
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({});
  const navigate = useNavigate(); // React Router hook for navigation

  const toggleModule = (index: number) => {
    setExpandedModules((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const modules = [
    {
      name: 'Invoice Create',
      icon: <FcDocument />,
      subItems: [
        { name: 'Create Invoice', route: '/create-invoice' },
        { name: 'View Templates', route: '/view-templates' },
        { name: 'Send Invoice', route: '/send-invoice' },
      ],
    },
    {
      name: 'Invoice Manage',
      icon: <FcFinePrint />,
      subItems: [
        { name: 'Edit Invoice', route: '/edit-invoice' },
        { name: 'Delete Invoice', route: '/delete-invoice' },
        { name: 'View History', route: '/view-history' },
      ],
    },
    {
      name: 'Customer Create',
      icon: <FcApprove />,
      subItems: [
        { name: 'Add New Customer', route: '/add-customer' },
        { name: 'Import Customers', route: '/import-customers' },
      ],
    },
    {
      name: 'Customer Manage',
      icon: <FcCollaboration />,
      subItems: [
        { name: 'Update Info', route: '/update-info' },
        { name: 'View All Customers', route: '/view-customers' },
      ],
    },
    {
      name: 'Customer Details',
      icon: <FcContacts />,
      subItems: [
        { name: 'Personal Info', route: '/personal-info' },
        { name: 'Order History', route: '/order-history' },
      ],
    },
    {
      name: 'Daily Work Progress',
      icon: <FcAreaChart />,
      subItems: [
        { name: "Today's Summary", route: '/todays-summary' },
        { name: 'Weekly Report', route: '/weekly-report' },
      ],
    },
    {
      name: 'Item Creation',
      icon: <FcInTransit />,
      subItems: [
        { name: 'Add Item', route: '/add-item' }, // Add Item Page
        { name: 'Manage Categories', route: '/manage-categories' },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="font-semibold text-gray-600 mb-4">Modules</h2>
      <ul className="space-y-4">
        {modules.map((module, index) => (
          <li key={index}>
            <div
              onClick={() => toggleModule(index)}
              className="flex items-center justify-between gap-4 text-gray-600 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {module.icon}
                {module.name}
              </div>
              <span className="text-sm text-gray-500">
                {expandedModules[index] ? '-' : '+'}
              </span>
            </div>
            {expandedModules[index] && (
              <ul className="pl-8 mt-2 space-y-2">
                {module.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => navigate(subItem.route)} // Navigate to route
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
