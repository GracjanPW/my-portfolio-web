import { useState } from "react";
import { marked } from "marked";

const useLineWriter = (markdown: string) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [index, setIndex] = useState(0);

  const allLines = markdown.split('\n');

  const progressTyping = (direction: "forward" | "backward") => {
    if (direction === "forward" && index < allLines.length) {
      setLines(allLines.slice(0, index + 1));
      setIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "backward" && index > 0) {
      setLines(allLines.slice(0, index - 1));
      setIndex((prevIndex) => prevIndex - 1);
    }

    if (index === allLines.length) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  };

  const renderedLines = lines.map(line => marked(line));

  return { lines: renderedLines, isFinished, progressTyping };
};

export default useLineWriter;