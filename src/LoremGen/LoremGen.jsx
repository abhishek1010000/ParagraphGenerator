import React, { useState } from "react";

function LoremGenerator() {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState("");

  const generateLorem = () => {
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${numParagraphs}`)
      .then((response) => response.json())
      .then((data) => setGeneratedText(data.join("\n\n")))
      .catch((error) => console.error("Error fetching lorem ipsum:", error));
  };

  return (
    <div>
      <h1 className="text-3xl text-red-600 mb-4">
        TIRED OF BORING LOREM IPSUM?
      </h1>
      <label className="text-2xl text-orange-800 ml-20 mb-4">
        Paragraphs:
        <input
          type="number"
          value={numParagraphs}
          onChange={(e) => setNumParagraphs(e.target.value)}
        />
      </label>
      <button
        className="text-2xl text-orange-800 border-spacing-0 bg-orange-400 rounded-md mr-20"
        onClick={generateLorem}
      >
        Generate
      </button>
      {generatedText && (
        <div>
          <h2 className="text-2xl text-orange-800 gap-3">Generated Text:</h2>
          <p className="text-1.5xl text-orange-800 gap-3">{generatedText}</p>
        </div>
      )}
    </div>
  );
}

export default LoremGenerator;
