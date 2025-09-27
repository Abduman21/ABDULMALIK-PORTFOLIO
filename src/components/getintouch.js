import React, { useState } from "react";
import "./style.css";

export const Getintouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please add a subject/title.";
    if (!form.message.trim()) return "Please write a message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }

    setStatus({ type: "sending", message: "Sending..." });

    // Example: replace with your API endpoint or email service
    try {
      // For demo we just wait then set sent. Replace with fetch/post to backend.
      await new Promise((r) => setTimeout(r, 800));
      console.log("Form submitted:", form);
      setStatus({ type: "sent", message: "Message sent. Thank you!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send. Try again later." });
    }
  };

  return (
    <div className="Getintouch-container">
      <div className="feature-content">
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>
        <div className="Getintouch-inner-container-form">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 className="form-title">Contact Me</h3>

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="subject">Subject (Title)</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            />

            <button
              className="submit-btn"
              type="submit"
              disabled={status?.type === "sending"}
            >
              {status?.type === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`form-status ${
                  status.type === "error" ? "error" : "success"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
