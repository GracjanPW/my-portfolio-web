import { useState } from "react";

const useTypeWriter = (text: string) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [index, setIndex] = useState(0);

  const progressTyping = (direction: "forward" | "backward") => {
    if (direction === "forward" && index < text.length) {
      setDisplayedText(text.slice(0, index + 1));
      setIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "backward" && index > 0) {
      setDisplayedText(text.slice(0, index - 1));
      setIndex((prevIndex) => prevIndex - 1);
    }

    if (index === text.length) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  };

  return { displayedText, isFinished, progressTyping };
};

export default useTypeWriter;