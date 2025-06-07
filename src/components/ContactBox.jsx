import React from 'react';

const ContactBox = () => {
  return (
    <div className="bg-[#1b1b1b] text-white p-8 rounded-3xl w-full max-w-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

      <form className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label className="block mb-2 text-lg">Name</label>
          <input
            type="text"
            placeholder="What do i call you?"
            className="w-full p-3 bg-[#3c3c3c] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block mb-2 text-lg">Contact</label>
          <input
            type="text"
            placeholder="Your email / Contact Information"
            className="w-full p-3 bg-[#3c3c3c] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-lg">Message</label>
          <textarea
            rows="5"
            placeholder="Your message"
            className="w-full p-3 bg-[#3c3c3c] text-white rounded-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="mt-2 py-3 bg-[#88C0D0] hover:bg-cyan-600 transition-colors duration-300 text-white font-semibold rounded-xl"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactBox;
