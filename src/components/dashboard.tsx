import React from "react";
import MainLayout from "./home";

const Dashboard: React.FC = () => {
  const cardData = [
    { title: "Total Invoice", value: "3,766", today: "92" },
    { title: "Total Customer", value: "652", today: "21" },
    { title: "Total Supplier", value: "38", today: "2" },
    { title: "Total Product", value: "21,156", today: "310" },
  ];

  return (
    <MainLayout>
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
        </div>

        {/* Statistics Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 transform transition-transform duration-300 hover:scale-105"
            >
              <h2 className="text-lg font-semibold text-gray-600">{card.title}</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">{card.value}</p>
              <p className="text-sm text-gray-500 mt-1">Today: {card.today}</p>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="mt-10 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-left">
                  <th className="px-4 py-2 border border-gray-300">Invoice ID</th>
                  <th className="px-4 py-2 border border-gray-300">Created At</th>
                  <th className="px-4 py-2 border border-gray-300">Customer Name</th>
                  <th className="px-4 py-2 border border-gray-300">Amount</th>
                  <th className="px-4 py-2 border border-gray-300">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <td className="px-4 py-2 border border-gray-300">INV/2019/001</td>
                  <td className="px-4 py-2 border border-gray-300">
                    2019-06-15 16:48:25
                  </td>
                  <td className="px-4 py-2 border border-gray-300">Najmul Hossain</td>
                  <td className="px-4 py-2 border border-gray-300">$200.00</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span className="text-green-600 font-semibold">Paid</span>
                  </td>
                </tr>
                <tr className="text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <td className="px-4 py-2 border border-gray-300">INV/2019/002</td>
                  <td className="px-4 py-2 border border-gray-300">
                    2019-06-15 16:48:25
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Walking Customer
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$300.00</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span className="text-green-600 font-semibold">Paid</span>
                  </td>
                </tr>
                <tr className="text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <td className="px-4 py-2 border border-gray-300">INV/2019/003</td>
                  <td className="px-4 py-2 border border-gray-300">
                    2019-06-15 16:48:25
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Another Customer
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$400.00</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span className="text-red-600 font-semibold">Due</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
