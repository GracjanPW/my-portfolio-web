"use client";

import { useEffect, useRef } from "react";
import { TypeHead } from "@/components/type-head";
import useTypeWriter from "@/hooks/use-type-writer";

export default function Home() {
  const bottomDiv = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const scrollDown = () => {
      if (!isFinished) progressTyping("forward");
      if (isFinished && !isFinished2) progressTyping2("forward");
      if (isFinished2 && !isFinished3) progressTyping3("forward");
      if (isFinished3 && !isFinished4) progressTyping4("forward");
      if (isFinished4 && !isFinished5) progressTyping5("forward");
      if (isFinished5 && !isFinished6) progressTyping6("forward");
      if (isFinished5 && isFinished6) console.log("finished");
    }
    const scrollUp = () => {
      if (displayedText6 !== "") progressTyping6("backward");
      else if (displayedText5 !== "") progressTyping5("backward");
      else if (displayedText4 !== "") progressTyping4("backward");
      else if (displayedText3 !== "") progressTyping3("backward");
      else if (displayedText2 !== "") progressTyping2("backward");
      else if (displayedText !== "") progressTyping("backward");
    }


    const handleScroll = (ev: WheelEvent) => {
      const direction_1 = ev.deltaY;
      if (direction_1 > 0) {
        scrollDown();
        scrollDown();
      }
      if (direction_1 < 0) {
        scrollUp();
        scrollUp();
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isFinished, progressTyping, progressTyping2]);

  useEffect(() => {
    if (bottomDiv.current) bottomDiv.current.scrollIntoView({ behavior: "smooth" });
  } ,[isFinished, isFinished2, isFinished3, isFinished4, isFinished5, isFinished6, displayedText, displayedText2, displayedText3, displayedText4, displayedText5, displayedText6]);


  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center">
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
                <div className="text-white flex space-x-2">
                  <div className="text-gray-400 font-semibold">
                    about-me.txt
                  </div>
                  <div className="text-gray-400 font-semibold">
                    education.txt
                  </div>
                  <div className="text-gray-400 font-semibold">
                    experience.txt
                  </div>
                  <div className="text-gray-400 font-semibold">
                    projects.txt
                  </div>
                  <div className="text-gray-400 font-semibold">contact.txt</div>
                </div>
                <div>
                  c://gracjan-wojciechowski/portifolio{"> "}
                  {displayedText2}
                  <TypeHead active={!isFinished2} />
                </div>
              </>
            )}
            {isFinished2 && (
              <div className="text-white">
                <div className="text-gray-400">
                  Hi, I&apos;m Gracjan Wojciechowski
                </div>
                <br />
                <div className="text-gray-400">
                  I&apos;m a fullstack developer based in the Uk. I specialize in
                  building web applications and web services.
                </div>
                <br />
                <div className="text-gray-400">
                  My main tech stack includes React, Node.js, TypeScript, NextJS and PrismaORM.
                  Im also familiar with Python to for backend development.
                </div>
                <br />
                <div className="text-gray-400">
                  I&apos;m currently looking for a full-time position as a software engineer. Feel free to contact me if you have any questions or 
                  if you would have a job offer for me.
                </div>
                <br />
              </div>
            )}
            {isFinished2 && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText3}
                <TypeHead active={!isFinished3} />
              </div>
            )}
            {isFinished3 && (
              <div className="text-white">
                <div className="text-gray-400">Education</div>
                <br />
                <div className="text-gray-400">
                  <ul>
                    <li>
                      <div>Loughborough University (2019 - 2023)</div>
                      <div>BSc Computer Science</div>
                    </li>
                    <li>
                      <br/> 
                    </li>
                    <li>
                      <div>Planstbrook School (2017 - 2019)</div>
                      <div>A Levels</div>
                      <ul className="list-inside list-disc">
                        <li>Mathematics</li>
                        <li>Physics</li>
                        <li>Computer Science</li>
                      </ul>
                    </li>

                  </ul>
                </div>
              </div>
            )}
            {isFinished3 && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText4}
                <TypeHead active={!isFinished4} />
              </div>
            )}
            {isFinished4 && (
              <div className="text-white">
                <div className="text-gray-400">Experience</div>
                <div className="text-gray-400">
                  <ul>
                    <li>
                      <div>Apr 2024 - Oct 2024</div>
                      <div>Fullstack Developer Intern</div>
                      <div>Schooly</div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          {
            isFinished4 && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText5}
                <TypeHead active={!isFinished5} />
              </div>
            )
            
          }
          {
            isFinished5 && (
              <div className="text-white">
                <div className="text-gray-400">Projects</div>
                <div className="text-gray-400">
                  - <a href="https://github.com/GracjanPW/my-portfolio-web">Portfolio</a> <br/>
                  - <a href="https://github.com/GracjanPW/calihub-app">Calihub - Workout Planner</a> <br/>
                  - <a href="https://github.com/GracjanPW/simlpe-http">Simple http server</a> <br/>
                </div>
              </div>
            )
          }
          {
            isFinished5 && (
              <div>
                c://gracjan-wojciechowski/portifolio{"> "}
                {displayedText6}
                <TypeHead active={!isFinished6} />
              </div>
            )
          }
          {
            isFinished6 && (
              <div className="text-white">
                <div className="text-gray-400">Contact</div>
                <div className="text-gray-400">
                  - <a href="https://www.linkedin.com/in/gracjan-wojciechowski-798647185/">LinkedIn</a> <br/>
                  - <a href="mailto:gracjanwojciechowski2002@gmail.com">Email</a> <br/>
                  - <a href="https://github.com/GracjanPW">GitHub</a> <br/>
                </div>
              </div>
            )
          }
          </div>
          <div ref={bottomDiv}/>
        </div>
      </div>
    </div>
  );
}
// {isFinished && isFinished2 && isFinished3 && (
//   <div className="text-white">
//     <div className="text-gray-400">Projects</div>
//     <div className="text-gray-400">
//       - <a href="">Portfolio</a> <br/>
//       - <a href="">Calihub - Workout Planner</a> <br/>
//       - <a href="">Simple http server</a> <br/>
//     </div>
//   </div>
// )}
