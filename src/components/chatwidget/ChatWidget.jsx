import React, { useState } from "react";
import { FaHome, FaCommentDots } from "react-icons/fa";
import { LuArrowDown } from "react-icons/lu";

const CHAT_FORM_ENDPOINT = "https://formspree.io/f/xnjqqeld"; // Formspree endpoint

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("form"); // "form" or "messages"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [messagesHistory, setMessagesHistory] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      const response = await fetch(CHAT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Save locally for recent messages
        setMessagesHistory([...messagesHistory, { ...formData }]);
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  const handleSendAgain = () => {
    setSubmitted(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {isOpen && (
        <div className="w-72 md:w-80 bg-yellow-400 rounded-xl shadow-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-yellow-500 px-4 py-2 flex justify-between items-center">
            <span className="pt-10 mb-2 text-gray-800">
              Please fill out the form below and we will get back to you as
              soon as possible.
            </span>
            {/* <button onClick={() => setIsOpen(false)}>
              <LuArrowDown className="text-white" />
            </button> */}
          </div>

          {/* Content */}
          <div className="p-4 bg-white flex flex-col gap-3">
            {/* Form View */}
            {view === "form" && !submitted && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="* Name"
                  value={formData.name}
                  onChange={handleChange}
                    className="px-2 py-2 rounded-md text-sm border border-red-500 focus:outline-none
                   placeholder:text-red-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="* Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md border border-red-500 focus:outline-none
                  placeholder:text-red-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="* Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md border border-red-500 focus:outline-none resize-none
                  placeholder:text-red-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center justify-center hover:bg-yellow-600 transition"
                >
                  Send
                </button>
              </form>
            )}

            {/* Success View */}
            {submitted && view === "form" && (
              <div className="flex flex-col items-center justify-center text-center gap-3 py-8">
                <p className="text-green-700 font-semibold">
                  Your message was sent successfully!
                </p>
                <button
                  onClick={handleSendAgain}
                  className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                >
                  Send Again
                </button>
              </div>
            )}

            {/* Recent Messages */}
            {view === "messages" && (
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                {messagesHistory.length === 0 ? (
                  <p className="text-gray-700 text-sm">
                    No recent messages yet.
                  </p>
                ) : (
                  messagesHistory.map((msg, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-2 rounded-md shadow-sm border border-gray-200"
                    >
                      <p className="font-semibold">{msg.name}</p>
                      <p className="text-sm text-gray-600">{msg.email}</p>
                      <p className="text-gray-700 mt-1">{msg.message}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-around bg-white py-2 border-t border-gray-200">
            <button
              className="text-yellow-500 hover:text-yellow-600"
              onClick={() => setView("form")}
            >
              <FaHome />
            </button>
            <button
              className="text-yellow-500 hover:text-yellow-600"
              onClick={() => setView("messages")}
            >
              <FaCommentDots />
            </button>
          </div>
        </div>
      )}

{/* Floating Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="bg-yellow-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-600 transition-all"
>
  {isOpen ? (
    <LuArrowDown className="text-purple-900 text-2xl" />
  ) : (
    <FaCommentDots className="text-purple-900 text-2xl" />
  )}
      </button>
      
    </div>
  );
};

export default ChatWidget;
