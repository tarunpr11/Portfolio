import React, { useState } from "react";

const ContactBox = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/movweeyr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", contact: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
    finally{
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1b1b1b] text-white p-8 rounded-3xl w-full max-w-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label className="block mb-2 text-lg">Name</label>
          <input
            type="text"
            name="name"
            placeholder="What do i call you?"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-[#3c3c3c] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block mb-2 text-lg">Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Your email / Contact Information"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 bg-[#3c3c3c] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-lg">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#3c3c3c] text-white rounded-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className={`mt-2 py-3 bg-[#88C0D0] hover:bg-cyan-600 transition-colors duration-300 text-white font-semibold rounded-xl flex justify-center items-center`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : (
            "Send"
          )}
        </button>

        {/* Status Message */}
        {status === "SUCCESS" && (
          <p className="text-green-500 text-sm mt-2">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "ERROR" && (
          <p className="text-red-500 text-sm mt-2">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactBox;
