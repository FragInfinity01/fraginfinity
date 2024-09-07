import React, { useState } from 'react';

function ContactPage() {
  const [status, setStatus] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      setStatus("Thanks for your submission!");
      form.reset();
    } else {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Contact Us</h1>
      <form 
        onSubmit={submitForm}
        action="https://formspree.io/f/xkgwykgn"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message:</label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full px-3 py-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}

export default ContactPage;