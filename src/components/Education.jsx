export default function Education() {
  return (
    <section id="education" className="container mx-auto my-8">
      <h2 className="text-center text-4xl font-bold mb-8">
        <small className="block font-light text-lg">About Me</small>
        Education
      </h2>
      <div className="bg-blue-100 rounded-3xl p-8">
        <ol>
          <li className="text-xl font-bold mt-4">Bachelor of Technology, Computer Science and Engineering
            <span className="text-base font-medium block">Vellore Institute of Technology, Vellore</span>
          </li>
          <ul className="list-disc ml-8 mb-4">
            <li>CGPA: <b>9.39</b>/10</li>
            <li>Coursework: Data Structures, Algorithms, OOPS with C,C++ and Java, Python, Design & Analysis of Algorithms, Frontend Development, Theory of Computation, Computer Architecture & Organization, Operating Systems, Database Systems, Compiler Design, Computer Network, AWS, Software Engineering, Embedded Systems</li>
          </ul>
          <li className="text-xl font-bold mt-4">Higher Secondary (12th)
            <span className="text-base font-medium block">Navrachana School Sama, Vadodara</span>
          </li>
          <ul className="list-disc ml-8 mb-4">
            <li>Percentage: 95%</li>
          </ul>
          <li className="text-xl font-bold mt-4">Secondary (10th)
            <span className="text-base font-medium block">Navrachana School Sama, Vadodara</span>
          </li>
          <ul className="list-disc ml-8">
            <li>Percentage: 94.8%</li>
          </ul>
        </ol>
      </div>
    </section>
  );
}