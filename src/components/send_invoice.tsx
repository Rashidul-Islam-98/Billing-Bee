import React, { useState } from 'react';
import MainLayout from './home';

const SendInvoice: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [invoiceId, setInvoiceId] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending the invoice (You would replace this with actual logic)
    setTimeout(() => {
      setIsSending(false);
      alert('Invoice sent successfully!');
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Invoice</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">Recipient Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter recipient's email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              rows={4}
              placeholder="Enter your message"
            />
          </div>

          {/* Invoice ID (Optional) */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">Invoice ID</label>
            <input
              type="text"
              name="invoiceId"
              value={invoiceId}
              onChange={(e) => setInvoiceId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter the invoice ID"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSending}
              className={`px-8 py-3 text-white text-lg font-semibold rounded-md transition-all ${isSending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isSending ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Invoice'
              )}
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default SendInvoice;
