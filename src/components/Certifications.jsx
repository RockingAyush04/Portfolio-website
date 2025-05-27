const certifications = [
  {
    img: "/imgs/Microsoft.png",
    label: "Microsoft Certified: Azure Fundamentals",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=455&cvid=hmFxO4TvAcjOA1zo3GejGw==",
  },
  {
    img: "/imgs/HackerRank_Icon-1000px.png",
    label: "HackerRank: Python (Basic)",
    link: "https://www.hackerrank.com/certificates/153f624ff1b2",
  },
  {
    img: "/imgs/HackerRank_Icon-1000px.png",
    label: "HackerRank: CSS (Basic)",
    link: "https://www.hackerrank.com/certificates/f2ea545a3e04",
  },
  {
    img: "/imgs/HackerRank_Icon-1000px.png",
    label: "HackerRank: Problem Solving (Basic)",
    link: "https://www.hackerrank.com/certificates/b5f5093afc34",
  },
  {
    img: "/imgs/HackerRank_Icon-1000px.png",
    label: "HackerRank: JavaScript (Basic)",
    link: "https://www.hackerrank.com/certificates/d87a43321c69",
  },
  {
    img: "/imgs/coursera.png",
    label: "Supervised Machine Learning: Regression and Classification",
    link: "https://coursera.org/share/06a6750024f9e8447d458b451355dbd3",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="container mx-auto my-8">
      <h2 className="text-center text-4xl md:text-5xl mb-4 leading-snug font-bold">
        <span className="block font-light text-2xl text-gray-500 mb-1">Licenses &</span>
        Certifications
      </h2>
      <div className="bg-blue-100 rounded-3xl px-4 py-10 md:py-14 md:px-10 lg:px-20">
        <div className="flex flex-wrap justify-around items-center gap-y-10">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-2 basis-full md:basis-1/3 max-w-sm px-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={cert.img}
                  alt={cert.label}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg">{cert.label}</span>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-base text-white bg-blue-700 hover:bg-blue-900 rounded px-5 py-2 transition font-normal text-center"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}