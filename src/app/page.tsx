"use client";

import { useEffect, useRef, useState } from "react";
import { TypeHead } from "@/components/type-head";
import useTypeWriter from "@/hooks/use-type-writer";
import useLineWriter from "@/hooks/use-line-writer";
import { Tooltip } from "@/components/tooltip";

const markdownLS = `
about-me.txt education.txt experience.txt projects.txt contact.txt
`;
const markdownAboutMe = `
About Me
<br/>
Hi, I'm Gracjan Wojciechowski  
<br/>  
I'm a fullstack developer based in the Uk. I specialize in building web applications and web services.
<br/>
My main tech stack includes React, Node.js, TypeScript, NextJS and PrismaORM. Im also familiar with Python to for backend development.  
<br/> 
I&apos;m currently looking for a full-time position as a software engineer. Feel free to contact me if you have any questions or if you would have a job offer for me.  
<br/>
`;
const markdownEducation = `
Education
<br/>
Loughborough University (2019 - 2023)
BSc Computer Science
<br/>
Planstbrook School (2017 - 2019)
A Levels
- Mathematics
- Physics
- Computer Science
<br/>
`;
const markdownExperience = `
Experience
<br/>
Schooly (Apr 2024 - Oct 2024)
Fullstack Developer Intern
<br/>
`;
const markdownProjects = `
Projects
<br/>
- [Portfolio](https://github.com/GracjanPW/my-portfolio-web)
- [Calihub - Workout Planner](https://github.com/GracjanPW/calihub-app)
- [Simple http server](https://github.com/GracjanPW/simlpe-http)
`;
const markdownContact = `
Contact
<br/>
- [LinkedIn](https://www.linkedin.com/in/gracjan-wojciechowski-798647185/)
- [Email](mailto:gracjanwojciechowski2002@gmail.com)
- [GitHub](https://github.com/GracjanPW)
`;

export default function Home() {
  const bottomDiv = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(true);
  const { displayedText, isFinished, progressTyping } = useTypeWriter("ls");
  const {
    displayedText: displayedText2,
    isFinished: isFinished2,
    progressTyping: progressTyping2,
  } = useTypeWriter("cat about-me.txt");
  const {
    displayedText: displayedText3,
    isFinished: isFinished3,
    progressTyping: progressTyping3,
  } = useTypeWriter("cat education.txt");
  const {
    displayedText: displayedText4,
    isFinished: isFinished4,
    progressTyping: progressTyping4,
  } = useTypeWriter("cat experience.txt");
  const {
    displayedText: displayedText5,
    isFinished: isFinished5,
    progressTyping: progressTyping5,
  } = useTypeWriter("cat projects.txt");
  const {
    displayedText: displayedText6,
    isFinished: isFinished6,
    progressTyping: progressTyping6,
  } = useTypeWriter("cat contact.txt");
  const {
    lines,
    isFinished: isFinishedMarkdown,
    progressTyping: progressMarkdown,
  } = useLineWriter(markdownLS);
  const {
    lines: linesAboutMe,
    isFinished: isFinishedMarkdownAboutMe,
    progressTyping: progressMarkdownAboutMe,
  } = useLineWriter(markdownAboutMe);
  const {
    lines: linesEducation,
    isFinished: isFinishedMarkdownEducation,
    progressTyping: progressMarkdownEducation,
  } = useLineWriter(markdownEducation);
  const {
    lines: linesExperience,
    isFinished: isFinishedMarkdownExperience,
    progressTyping: progressMarkdownExperience,
  } = useLineWriter(markdownExperience);
  const {
    lines: linesProjects,
    isFinished: isFinishedMarkdownProjects,
    progressTyping: progressMarkdownProjects,
  } = useLineWriter(markdownProjects);
  const {
    lines: linesContact,
    isFinished: isFinishedMarkdownContact,
    progressTyping: progressMarkdownContact,
  } = useLineWriter(markdownContact);

  useEffect(() => {
    const scrollDown = () => {
      if (!isFinished) {
        progressTyping("forward");
        setShowTooltip(false);
      }
      if (isFinished && !isFinishedMarkdown) progressMarkdown("forward");
      if (isFinishedMarkdown && !isFinished2) progressTyping2("forward");
      if (isFinished2 && !isFinishedMarkdownAboutMe)
        progressMarkdownAboutMe("forward");
      if (isFinishedMarkdownAboutMe && !isFinished3) progressTyping3("forward");
      if (isFinished3 && !isFinishedMarkdownEducation)
        progressMarkdownEducation("forward");
      if (isFinishedMarkdownEducation && !isFinished4)
        progressTyping4("forward");
      if (isFinished4 && !isFinishedMarkdownExperience)
        progressMarkdownExperience("forward");
      if (isFinishedMarkdownExperience && !isFinished5)
        progressTyping5("forward");
      if (isFinished5 && !isFinishedMarkdownProjects)
        progressMarkdownProjects("forward");
      if (isFinishedMarkdownProjects && !isFinished6)
        progressTyping6("forward");
      if (isFinished6 && !isFinishedMarkdownContact)
        progressMarkdownContact("forward");
    };
    const scrollUp = () => {
      if (linesContact.length > 0) progressMarkdownContact("backward");
      else if (displayedText6 !== "") progressTyping6("backward");
      else if (linesProjects.length > 0) progressMarkdownProjects("backward");
      else if (displayedText5 !== "") progressTyping5("backward");
      else if (linesExperience.length > 0)
        progressMarkdownExperience("backward");
      else if (displayedText4 !== "") progressTyping4("backward");
      else if (linesEducation.length > 0) progressMarkdownEducation("backward");
      else if (displayedText3 !== "") progressTyping3("backward");
      else if (linesAboutMe.length > 0) progressMarkdownAboutMe("backward");
      else if (displayedText2 !== "") progressTyping2("backward");
      else if (lines.length > 0) progressMarkdown("backward");
      else if (displayedText !== "") progressTyping("backward");
      else {
        setShowTooltip(true);
      }
    };

    const handleScroll = (ev: WheelEvent) => {
      const direction_1 = ev.deltaY;
      if (direction_1 > 0) {
        scrollDown();
      }
      if (direction_1 < 0) {
        scrollUp();
      }
      if (bottomDiv.current) {
        bottomDiv.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  });

  return (
    <div className="h-screen w-full overflow-hidden">
      {showTooltip && <Tooltip message="Scroll to see the content appear" />}
      <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center p-10">
        <div className="relative min-w-[400px] w-[800px] min-h-[200px] h-[400px] rounded-md bg-black overflow-hidden shadow-gray-800 shadow-sm ">
          <div className="sticky top-0 w-full bg-stone-800 flex pt-2 pr-4 pl-0 justify-between">
            <div className="flex">
              <div className="bg-black w-2 h-full">
                <div className="bg-stone-800 w-2 h-full rounded-br-sm" />
              </div>
              <div
                id="tab"
                className="bg-black px-2 pt-1 text-sm rounded-t-md truncate font-mono font-light text-gray-400"
              >
                new terminal
              </div>
              <div className="bg-black w-2 h-full">
                <div className="bg-stone-800 w-2 h-full rounded-bl-sm" />
              </div>
              <div className="font-thin text-md text-gray-400">+</div>
            </div>
            <div className="flex items-top space-x-3">
              <div className="bg-green-600 size-3 aspect-square rounded-full" />
              <div className="bg-orange-600 size-3 aspect-square rounded-full" />
              <div className="bg-red-600 size-3 aspect-square rounded-full" />
            </div>
          </div>
          <div className="text-green-600 px-2 pt-4 overflow-y-auto pb-8">
            <div>
              c://gracjan-wojciechowski/portifolio{"> "}
              {displayedText}
              <TypeHead active={!isFinished} />
            </div>
            {isFinished && (
              <>
                <div className="text-gray-400">
                  {lines.map((line, i) => (
                    <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                  ))}
                </div>
                {isFinishedMarkdown && (
                  <div>
                    c://gracjan-wojciechowski/portifolio{"> "}
                    {displayedText2}
                    <TypeHead active={!isFinished2} />
                  </div>
                )}
              </>
            )}
            {isFinished2 && (
              <div className="text-gray-400">
                {linesAboutMe.map((line, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            )}
            {isFinishedMarkdownAboutMe && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText3}
                <TypeHead active={!isFinished3} />
              </div>
            )}
            {isFinished3 && (
              <div className="text-gray-400">
                {linesEducation.map((line, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            )}
            {isFinishedMarkdownEducation && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText4}
                <TypeHead active={!isFinished4} />
              </div>
            )}
            {isFinished4 && (
              <div className="text-gray-400">
                {linesExperience.map((line, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            )}
            {isFinishedMarkdownExperience && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText5}
                <TypeHead active={!isFinished5} />
              </div>
            )}
            {isFinished5 && (
              <div className="text-gray-400">
                {linesProjects.map((line, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            )}
            {isFinishedMarkdownProjects && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText6}
                <TypeHead active={!isFinished6} />
              </div>
            )}
            {isFinished6 && (
              <div className="text-gray-400">
                {linesContact.map((line, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            )}
          </div>
          <div ref={bottomDiv} />
        </div>
      </div>
    </div>
  );
}
