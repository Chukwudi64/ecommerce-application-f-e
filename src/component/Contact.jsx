import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Show success toast
    toast.success("Message sent successfully!");
  };

  return (
    <div
      className="bg-cover bg-center bg-gray-100 h-screen"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-lg text-gray-700 block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-lg text-gray-700 block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-lg text-gray-700 block">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Contact;
