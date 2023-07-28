import React from "react";

import Project from "./Project";
import jate from "../../assets/Portfolio/JATE.png"
import noteTaker from "../../assets/Portfolio/note-taker.png"
import weatherDashboard from "../../assets/Portfolio/weather-dashboard.png"
import memoryGame from "../../assets/Portfolio/memory-game.png"
import schedular from "../../assets/Portfolio/scheduler.png"
import passwordGenerator from "../../assets/Portfolio/password-generator.png"

export default function Portfolio() {

  const projects =[
    {
      title:'Just Another Text Editor ',
      img:jate,
      deployedLink:'https://limitless-waters-60886-03cf0891762e.herokuapp.com/',
      repoLink:'https://github.com/Hiroro1989/pwa-text-editor',
    },
    {
      title:"noteTaker",
      img:noteTaker,
      deployedLink:'https://hidden-retreat-57417.herokuapp.com/',
      repoLink:'https://github.com/Hiroro1989/note-taker',
    },
    {
      title:'Weather-Dashboard',
      img:weatherDashboard,
      deployedLink:'https://hiroro1989.github.io/Weather-Dashboard/',
      repoLink:'https://github.com/Hiroro1989/Weather-Dashboard',
    },
    {
      title:'Memory Game and Jokes',
      img:memoryGame,
      deployedLink:'https://github.com/AngadBatth/memory-game',
      repoLink:'https://github.com/AngadBatth/memory-game#memory-game-and-jokes',
    },
    {
      title:'Work-Day-Scheduler',
      img:schedular,
      deployedLink:'https://hiroro1989.github.io/Work-Day-Scheduler/',
      repoLink:'https://github.com/Hiroro1989/Work-Day-Scheduler',
    },
    {
      title:'Password-Generator',
      img:passwordGenerator,
      deployedLink:'https://hiroro1989.github.io/Password-Generator/',
      repoLink:'https://github.com/Hiroro1989/Password-Generator',
    },
  ]

  function chunkProjects(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  
  const chunkedProjects = chunkProjects(projects, 3);


  return (
    <div className="container">
      <h2 className="row">Portfolio</h2>
      {/* Render each group of three projects */}
      {chunkedProjects.map((projectGroup, index) => (
        <div className="row" key={index}>
          {projectGroup.map((project) => (
            <div className="col-md-4" key={project.title}>
              <Project
                title={project.title}
                img={project.img}
                deployedLink={project.deployedLink}
                repoLink={project.repoLink}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );  }
  