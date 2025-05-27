export default function Skills() {
  return (
    <section id="skills" className="container mx-auto my-8">
      <h2 className="text-center text-4xl font-bold mb-8">
        <small className="block font-light text-lg">About Me</small>
        Skills
      </h2>
      <div className="bg-blue-100 rounded-3xl p-8 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="font-semibold text-xl mb-4">Technical</h3>
          <ul className="flex flex-wrap gap-3 mb-6">
            {["HTML", "CSS", "JavaScript", "React.Js", "MongoDB", "Node.Js", "Python", "Java", "C/C++", "RStudio", "Express.Js", "Figma", "TailwindCSS"].map((tech) =>
              <li key={tech} className="bg-blue-400 text-white px-4 py-2 rounded-lg">{tech}</li>
            )}
          </ul>
          <h3 className="font-semibold text-xl mb-4">Non-Technical</h3>
          <ul className="flex flex-wrap gap-3">
            {["Event Planning", "Project Management", "Critical Thinking", "Time Management"].map((nt) =>
              <li key={nt} className="bg-blue-400 text-white px-4 py-2 rounded-lg">{nt}</li>
            )}
          </ul>
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="font-semibold text-xl">A bit about me</h3>
          <p>As a Computer Science student at VIT Vellore, I have honed my skills in programming languages like C++, Python, Java, and JavaScript, along with expertise in web development and backend technologies. With a strong foundation in software development, I am constantly exploring new technologies and expanding my knowledge.</p>
          <p>Beyond technical skills, I have taken on leadership roles, serving as the Management Head of IEEE SSIT (2024-2025) and spearheading initiatives like "Code4Change," a 36-hour hackathon with 1,000+ participants. From securing sponsorships to mentoring teams, I thrive in collaborative environments that drive innovation and growth.</p>
          <p>I am a dedicated and detail-oriented individual who is eager to contribute to innovative projects and collaborate with like-minded professionals. Let's connect and see how we can work together to achieve our goals!</p>
        </div>
      </div>
    </section>
  );
}