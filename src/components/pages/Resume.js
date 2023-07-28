import React from "react";
import resume from "../../assets/resume/HiroakiAraiResume.pdf"

export default function Resume() {
    return (
      <div className="container">
        <div className="row">
         <h3 className="col">Resume</h3>
          <div className="row">
            <button type="button" class="btn btn-light">
            <a href={resume} target="_blank" rel="noreferrer">
            DownLoad resume
            </a>
            </button>

          <h3 className="col">Technical Skills</h3>
          <div className="row">
            <ul>
              <li>
                html5
              </li>
              <li>
                CSS
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                JavaScript
              </li>
              <li>
                Node
              </li>
              <li>
                React
              </li>
              <li>
                MySQL
              </li>
              <li>
                MongoDB
              </li>
            </ul>
          </div>
        

         </div>
        </div>
      </div>
    );
  }
  