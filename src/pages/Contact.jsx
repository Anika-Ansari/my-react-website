import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">Contact Us</h2>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
