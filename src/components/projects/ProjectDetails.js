import React from 'react'
import {
    useParams
  } from "react-router-dom";
const ProjectDetails = (props) => {
    let { id } = useParams();
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Explicabo modi dolore veritatis impedit accusamus commodi 
                        corrupti cum ipsam ea vel!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div className="">Posted by the Olopang</div>
                    <div>2nd of September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
