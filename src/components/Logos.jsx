export default function Logos() {
  return (
    <section className="bg-gray-100 rounded-3xl py-8 my-8 overflow-hidden">
      <div className="flex animate-marquee gap-6 whitespace-nowrap">
        {[
          "html.png", "css.png", "javascript.png", "react.png", "vscode.png",
          "python.png", "NodeJs.png", "C.png",
          "html.png", "css.png", "javascript.png", "react.png", "vscode.png",
          "python.png", "NodeJs.png", "C.png"
        ].map((img, idx) => (
          <img key={idx} src={`/imgs/${img}`} alt={img.split('.')[0]} width={128} className="inline-block" />
        ))}
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </section>
  );
}