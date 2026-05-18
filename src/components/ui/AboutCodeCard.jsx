import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

const AboutCodeCard = () => {
  const [copied, setCopied] = useState(false);

  const aboutMe = {
    name: "Prashant",
    role: "Full Stack Developer",
    location: "Faridabad, India",
    education: "MCA - MRIIRS",
    cgpa: 7.76,
    techStack: [
      "MERN",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "LangChain"
    ],
    interests: [
      "Web Development",
      "Problem Solving",
      "AI Applications",
      "Real-time Systems"
    ],
    status: "Open to opportunities"
  };

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Group techStack in 3 items per line (short items), and interests in 2 items per line (long items) to prevent overflow
  const techStackChunks = chunkArray(aboutMe.techStack, 3);
  const interestsChunks = chunkArray(aboutMe.interests, 2);

  const formatChunkedArray = (chunks) => {
    return chunks
      .map((chunk, idx) => {
        const items = chunk.map((item) => `"${item}"`).join(", ");
        const suffix = idx === chunks.length - 1 ? "" : ",";
        return `    ${items}${suffix}`;
      })
      .join("\n");
  };

  const codeString = `const aboutMe = {
  name: "${aboutMe.name}",
  role: "${aboutMe.role}",
  location: "${aboutMe.location}",
  education: "${aboutMe.education}",
  cgpa: ${aboutMe.cgpa},
  techStack: [
${formatChunkedArray(techStackChunks)}
  ],
  interests: [
${formatChunkedArray(interestsChunks)}
  ],
  status: "${aboutMe.status}",
};

export default aboutMe;`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const totalLines = 14 + techStackChunks.length + interestsChunks.length;
  const lineNumbers = Array.from({ length: totalLines }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-[500px] bg-[#1e1e2e] rounded-2xl border border-[#2d2d3d] shadow-2xl overflow-hidden transition-all duration-500 group select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#181825] border-b border-[#252535]">
        {/* Red, Yellow, Green window controls */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
        </div>

        {/* Tab/File Title */}
        <div className="text-xs text-[#a6adc8] font-mono select-none font-medium tracking-wide">
          aboutMe.js
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="text-[#a6adc8] hover:text-white bg-[#1e1e2e]/50 hover:bg-[#313144] p-1.5 rounded-lg border border-[#2d2d3d] transition-all duration-300 active:scale-95 flex items-center justify-center">
          {copied ? (
            <FaCheck className="text-emerald-400 text-xs sm:text-sm" />
          ) : (
            <FaRegCopy className="text-xs sm:text-sm" />
          )}
        </button>
      </div>

      {/* Code Text Body */}
      <div className="p-4 overflow-x-auto text-left font-mono text-[11px] xs:text-xs sm:text-sm leading-relaxed bg-[#1e1e2e] select-text">
        <div className="flex">
          {/* Line Numbers Column */}
          <div className="flex flex-col text-right text-[#585b70] select-none pr-3 border-r border-[#313244] w-8">
            {lineNumbers.map((num) => (
              <span key={num}>{num}</span>
            ))}
          </div>

          {/* Syntax Highlighted Code Column */}
          <div className="pl-3 text-white whitespace-pre font-mono">
            {/* Line 1: Header */}
            <div>
              <span className="text-[#c792ea]">const</span>{" "}
              <span className="text-[#82aaff]">aboutMe</span> ={" "}
              <span className="text-[#ffd700]">{`{`}</span>
            </div>

            {/* Line 2: Name */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">name</span>:{" "}
              <span className="text-[#ecc48d]">"{aboutMe.name}"</span>,
            </div>

            {/* Line 3: Role */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">role</span>:{" "}
              <span className="text-[#ecc48d]">"{aboutMe.role}"</span>,
            </div>

            {/* Line 4: Location */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">location</span>:{" "}
              <span className="text-[#ecc48d]">"{aboutMe.location}"</span>,
            </div>

            {/* Line 5: Education */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">education</span>:{" "}
              <span className="text-[#ecc48d]">"{aboutMe.education}"</span>,
            </div>

            {/* Line 6: CGPA */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">cgpa</span>:{" "}
              <span className="text-[#c3e88d]">{aboutMe.cgpa}</span>,
            </div>

            {/* Line 7: TechStack Array start */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">techStack</span>:{" "}
              <span className="text-[#ffd700]">{`[`}</span>
            </div>

            {/* Chunked TechStack Elements */}
            {techStackChunks.map((chunk, chunkIdx) => {
              const isLastChunk = chunkIdx === techStackChunks.length - 1;
              return (
                <div key={chunkIdx}>
                  {"    "}
                  {chunk.map((item, itemIdx) => {
                    const isLastItem = itemIdx === chunk.length - 1;
                    return (
                      <span key={item}>
                        <span className="text-[#ecc48d]">"{item}"</span>
                        {(!isLastChunk || !isLastItem) && <span className="text-white/80">,</span>}
                        {!isLastItem && " "}
                      </span>
                    );
                  })}
                </div>
              );
            })}

            {/* TechStack Array end */}
            <div>
              {"  "}
              <span className="text-[#ffd700]">{`],`}</span>
            </div>

            {/* Interests Array start */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">interests</span>:{" "}
              <span className="text-[#ffd700]">{`[`}</span>
            </div>

            {/* Chunked Interests Elements */}
            {interestsChunks.map((chunk, chunkIdx) => {
              const isLastChunk = chunkIdx === interestsChunks.length - 1;
              return (
                <div key={chunkIdx}>
                  {"    "}
                  {chunk.map((item, itemIdx) => {
                    const isLastItem = itemIdx === chunk.length - 1;
                    return (
                      <span key={item}>
                        <span className="text-[#ecc48d]">"{item}"</span>
                        {(!isLastChunk || !isLastItem) && <span className="text-white/80">,</span>}
                        {!isLastItem && " "}
                      </span>
                    );
                  })}
                </div>
              );
            })}

            {/* Interests Array end */}
            <div>
              {"  "}
              <span className="text-[#ffd700]">{`],`}</span>
            </div>

            {/* Status */}
            <div>
              {"  "}
              <span className="text-[#82aaff]">status</span>:{" "}
              <span className="text-[#ecc48d]">"{aboutMe.status}"</span>,
            </div>

            {/* Closing Bracket */}
            <div>
              <span className="text-[#ffd700]">{`};`}</span>
            </div>

            {/* Blank Line */}
            <div> </div>

            {/* Export */}
            <div>
              <span className="text-[#c792ea]">export default</span>{" "}
              <span className="text-[#82aaff]">aboutMe</span>;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCodeCard;
