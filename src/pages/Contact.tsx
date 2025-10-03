import React, { useState } from "react";
import emailjs from "emailjs-com";

  export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e :any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .send(
        "service_zdmeu3d",   // replace with EmailJS Service ID
        "template_rqyla0l",  // replace with EmailJS Template ID
        formData,
        "m4nEK-N1wLqOFhFte"    // replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong ❌ Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 ">
      <div className="bg-slate-400 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-stone-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Have questions? Fill out the form below and we’ll respond soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-stone-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-stone-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-stone-400"
              placeholder="Write your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2  rounded-lg hover:bg-violet-900 transition mb-1"
          >
            Send Message
          </button>
        </form>

        {/* Status message */}
        {status && (
          <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
        )}
      </div>
    </div>
  );
}
