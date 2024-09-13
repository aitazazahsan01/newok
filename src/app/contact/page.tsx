/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e :any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email)
    alert('Thank you for your review!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <motion.header
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-2 text-2xl">Feel free to reach out or leave a review!</p>
      </motion.header>

      {/* Contact Info */}
      <motion.div
        className="p-8 bg-white shadow-lg flex flex-col lg:flex-row justify-between items-start mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold">How to Reach Me</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Email:</strong> ahsanaitizaz615@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +92 332 7545824
            </li>
            <li>
              <strong>LinkedIn:</strong> <a href="#" className="text-blue-600">https://linkedin.com/in/muhammad-aitazaz-ahsan-74362028a</a>
            </li>
            <li>
              <strong>GitHub:</strong> <a href="#" className="text-blue-600">github.com/aitazazahsan01</a>
            </li>
            <li>
              <strong>Fiverr:</strong> <a href="#" className="text-blue-600">fiverr.com/aitizazahsan</a>
            </li>
            <li>
              <strong>Upwork:</strong> <a href="#" className="text-blue-600">upwork.com/aitizazahsan</a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">Leave a Review</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            //   rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </motion.form>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        className="mt-auto bg-gray-800 text-white p-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aitazaz Ahsan. All rights reserved.
        </p>
        <p className="text-sm">Follow us on <a href="#" className="text-blue-400">Facebook</a>, <a href="#" className="text-blue-400">Twitter</a>, and <a href="#" className="text-blue-400">Instagram</a>.</p>
      </motion.footer>
    </div>
  );
}
