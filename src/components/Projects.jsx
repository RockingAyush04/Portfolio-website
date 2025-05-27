export default function Projects() {
  return (
    <section id="projects" className="container mx-auto my-8">
      <h2 className="text-center text-4xl font-bold mb-8">
        <small className="block font-light text-lg">Recent</small>
        Projects
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Project 1 */}
        <article className="bg-yellow-100 rounded-3xl p-8 flex-1">
          <figure className="w-full relative pb-[56.25%] overflow-hidden rounded-xl">
            <img src="/imgs/ayutan.png" alt="flight booking system image" className="absolute top-0 left-0 w-full h-full object-cover transition duration-700 hover:scale-110"/>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 hover:opacity-100 transition">Flight Booking System</figcaption>
          </figure>
          <h3 className="text-2xl font-bold mt-4">Python- Flight Booking System</h3>
          <div className="font-semibold text-gray-800 mb-2">Tech Stacks: Python, Tkinter GUI, SQL</div>
          <p className="mb-3">This Python project is modeled after popular flight ticketing websites such as MakeMyTrip. It incorporates a variety of user-defined functions, MySQL database integration, Tkinter GUI, and various other features. </p>
          <button
            className="button-64 mt-2"
            onClick={() => window.open('https://github.com/RockingAyush04/Python-Project---Flight-Management-System', '_blank')}
          >
            <span className="bg-blue-900 text-white px-6 py-3 rounded-md">Click to Know More</span>
          </button>
        </article>
        {/* Project 2 */}
        <article className="bg-yellow-100 rounded-3xl p-8 flex-1">
          <figure className="w-full relative pb-[56.25%] overflow-hidden rounded-xl">
            <img src="/imgs/portfolio1.jpg" alt="portfolio website img" className="absolute top-0 left-0 w-full h-full object-cover transition duration-700 hover:scale-110"/>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 hover:opacity-100 transition">Portfolio Website</figcaption>
          </figure>
          <h3 className="text-2xl font-bold mt-4">Portfolio Website</h3>
          <div className="font-semibold text-gray-800 mb-2">Tech Stacks: HTML, CSS, Javascript</div>
          <p className="mb-3">A sleek and modern portfolio website showcasing projects, skills, and certifications, built with HTML, CSS, and JavaScript for a dynamic and interactive user experience.</p>
          <button
            className="button-64 mt-2"
            onClick={() => window.open('https://github.com/RockingAyush04/Portfolio-website', '_blank')}
          >
            <span className="bg-blue-900 text-white px-6 py-3 rounded-md">Click to Know More</span>
          </button>
        </article>
        {/* Project 3 */}
        <article className="bg-yellow-100 rounded-3xl p-8 flex-1">
          <figure className="w-full relative pb-[56.25%] overflow-hidden rounded-xl">
            <img src="/imgs/campIndia.png" alt="campindia image" className="absolute top-0 left-0 w-full h-full object-cover transition duration-700 hover:scale-110"/>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 hover:opacity-100 transition">CampIndia</figcaption>
          </figure>
          <h3 className="text-2xl font-bold mt-4">CampIndia- Campgrounds in India</h3>
          <div className="font-semibold text-gray-800 mb-2">Tech Stacks: NodeJS, Express, MongoDB, Bootstrap</div>
          <p className="mb-3">Created a platform for discovering and reviewing campgrounds, with over 100 campgrounds, tailored for camping enthusiasts. Enabled users to create, edit, and delete campgrounds.</p>
          <button className="button-53 mt-2" disabled>Under Development</button>
        </article>
      </div>
      {/* Custom styles for button-64 and button-53 */}
      <style>{`
        .button-64 {
          align-items: center;
          background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
          border: 0;
          border-radius: 8px;
          box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
          color: #FFFFFF;
          display: flex;
          font-size: 16px;
          justify-content: center;
          min-width: 100px;
          padding: 2px;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
          touch-action: manipulation;
        }
        .button-64:active,.button-64:hover{ outline: 0; }
        .button-64 span { background-color: rgb(5, 6, 45); padding: 16px 24px; border-radius: 6px; width: 100%; height: 100%; transition: 300ms; }
        .button-64:hover span { background: none; }
        .button-53 {
          background-color: #3DD1E7;
          border: 0 solid #E5E7EB;
          color: #000000;
          display: flex;
          font-size: 1rem;
          font-weight: 700;
          justify-content: center;
          line-height: 1.75rem;
          padding: .75rem 1.65rem;
          position: relative;
          text-align: center;
          text-decoration: none #000000 solid;
          width: 100%;
          max-width: 460px;
          transform: rotate(-2deg);
          cursor: pointer;
          user-select: none;
          touch-action: manipulation;
        }
        .button-53:focus { outline: 0; }
        .button-53:after { content: ''; position: absolute; border: 1px solid #000000; bottom: 4px; left: 4px; width: calc(100% - 1px); height: calc(100% - 1px);}
        .button-53:hover:after { bottom: 2px; left: 2px; }
      `}</style>
    </section>
  );
}