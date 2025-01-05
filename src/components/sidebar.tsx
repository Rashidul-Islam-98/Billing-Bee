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
  const navigate = useNavigate(); 

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
        { name: 'Import Customers', route: '/import-customer' },
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
        { name: 'Add Item', route: '/add-item' },
        { name: 'Manage Categories', route: '/manage-categories' },
      ],
    },
  ];

  return (
    <aside className="w-60 bg-white shadow-lg rounded-lg p-4 h-full fixed top-0 left-0 transition-all duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Modules</h2>
      <ul className="space-y-4 overflow-y-auto max-h-[90vh]">
        {modules.map((module, index) => (
          <li key={index}>
            <div
              onClick={() => toggleModule(index)}
              className="flex items-center justify-between gap-4 text-gray-600 hover:bg-blue-100 p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-4">
                {module.icon}
                <span className="font-medium">{module.name}</span>
              </div>
              <span className="text-lg">{expandedModules[index] ? '-' : '+'}</span>
            </div>
            {expandedModules[index] && (
              <ul className="pl-8 mt-2 space-y-2 opacity-100 transition-all duration-300 ease-in-out">
                {module.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => navigate(subItem.route)}
                    className="text-gray-500 hover:text-blue-600 cursor-pointer transition-all duration-200 ease-in-out"
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
