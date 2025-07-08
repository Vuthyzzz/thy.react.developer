import React, { useState } from "react";
import { MdEmail, MdPerson, MdMessage } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    alert("Thank you for contacting me!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100  py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
         
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
              <MdPerson /> Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your name"
            />
          </div>

          
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
              <MdEmail /> Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
              <MdMessage /> Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your message..."
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
