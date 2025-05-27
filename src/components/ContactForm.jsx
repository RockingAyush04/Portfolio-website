import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_xx37ymk', 'template_0ju9cnh', form.current, '77IDTFB-0shg_IxXd')
      .then(() => {
        setSubmit(true);
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        alert("Failed to send: " + error.text);
      }).finally(() => setLoading(false));
  };

  return (
    <div className="bg-blue-100 p-8 rounded-xl shadow-lg w-full md:max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Get in Touch!</h3>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          value={name}
          className="w-full px-4 py-3 rounded-lg border border-blue-400 focus:border-blue-600 focus:outline-none"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          className="w-full px-4 py-3 rounded-lg border border-blue-400 focus:border-blue-600 focus:outline-none"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          value={message}
          className="w-full px-4 py-3 rounded-lg border border-blue-400 focus:border-blue-600 focus:outline-none min-h-[120px]"
          placeholder="Message"
          onChange={e => setMessage(e.target.value)}
          required
        />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition cursor-pointer">
          Submit
        </button>
      </form>
      {loading && <p className="mt-2 text-blue-800">Sending your message...</p>}
      {submit && <p className="mt-2 text-green-700 font-semibold">Your message has been sent!</p>}
    </div>
  );
}