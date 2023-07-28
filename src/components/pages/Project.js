import React from "react";

// need to add later
export default function Project(title, img, deployedLink, repoLink){
    return(
        <div className="card" style={{ width: "18rem" }}>
         <img src={img} class="card-img-top" alt="project-screenshot" />
         <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <a href={deployedLink} class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Live</a>
            <a href={repoLink} class="btn btn-primary" target="_blank" rel="noopener noreferrer">Github Repo</a>
         </div>
        </div>
    );
}