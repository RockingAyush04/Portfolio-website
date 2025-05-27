export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row container mx-auto my-8 gap-8 items-stretch">
      {/* Left: Text Block */}
      <div className="flex-1 bg-blue-100 rounded-3xl p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block font-light text-3xl mb-2">Hi I'm</span>
            <span className="font-extrabold">Ayush Padhy</span>
          </h1>
          <p className="mb-8 text-lg">
            With a thirst for knowledge, I am always seeking opportunities to expand my skillset and stay up-to-date with the latest trends and advancements in the field.
          </p>
          <div className="mb-6 flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1xhH27Op4aHIg5flMG00Xcce8UtnXeSov/view?usp=drive_link"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex gap-6 mt-4">
          <a href="https://www.linkedin.com/in/ayushpadhy">
            <img src="/imgs/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a href="https://github.com/RockingAyush04">
            <img src="/imgs/github.png" alt="GitHub" className="w-10 h-10" />
          </a>
          <a href="https://leetcode.com/u/ayushpadhy1309/">
            <img src="/imgs/Leetcode.png" alt="Leetcode" className="w-10 h-10" />
          </a>
        </div>
      </div>
      {/* Right: Image Block */}
      <div className="flex-1 bg-yellow-300 rounded-3xl flex justify-center items-end px-8 pb-0" style={{ minHeight: '400px' }}>
  <img
    src="/imgs/hero-image.png"
    alt="Ayush Padhy"
    className="max-w-[420px] -mt-24 w-full object-contain"
  />
</div>
    </section>
  );
}