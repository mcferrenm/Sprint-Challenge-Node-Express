import React from "react";
import { Link } from "react-router-dom";

const ProjectListView = props => {
  return (
    <div>
      {props.projects.map(project => (
        <Link
          to={`/projects/${project.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            style={{
              background: "coral",
              width: "50%",
              margin: "5px auto",
              padding: "20px"
            }}
            key={project.id}
          >
            <p>Name: {project.name}</p>
            <p>Description: {project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectListView;
