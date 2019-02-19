import React from "react";
import { Link } from "react-router-dom";

const ProjectListView = props => {
  return (
    <div className="project-list">
      <h1>Projects:</h1>
      {props.projects.map(project => (
        <Link
          to={`/projects/${project.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="project-item" key={project.id}>
            <p>
              <em>Name:</em> {project.name}
            </p>
            <p>
              <em>Description:</em> {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectListView;
