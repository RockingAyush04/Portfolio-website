import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto my-8">
      <h2 className="text-center text-4xl font-bold mb-8">
        <small className="block font-light text-lg">Get in Touch</small>
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-green-200 p-8 rounded-3xl text-xl mb-6 md:mb-0">
          <p>
            Ayush Padhy <br />
            Student, VIT Vellore<br />
            CSE Core<br /><br />
            <b>Mobile Number:</b> +91 9327450873<br />
            <b>Email:</b> ayushpadhy1309@gmail.com<br />
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/ayushpadhy">
              <img src="/imgs/linkedin.png" alt="LinkedIn" width="48" />
            </a>
            <a href="https://github.com/RockingAyush04">
              <img src="/imgs/github.png" alt="GitHub" width="48" />
            </a>
            <a href="https://leetcode.com/u/ayushpadhy1309/">
              <img src="/imgs/Leetcode.png" alt="Leetcode" width="48" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}