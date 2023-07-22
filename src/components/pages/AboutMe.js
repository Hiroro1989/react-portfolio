import React from "react";
import photo from "../../assets/about-me/hiroakiArai.jpg"

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="">
        <img src={photo} className="" height="100px" width="75px" />
      </div>
      <p>
        Hello, I'm Hiroaki, a dedicated and passionate web developer with a diverse skill set and a love for creating innovative digital solutions. With a strong educational background and hands-on experience in IT and computer systems, I thrive in building user-friendly web applications and providing top-notch technical support.
      </p>
    </div>
  );
}
