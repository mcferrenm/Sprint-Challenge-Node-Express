import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import ProjectListView from "./views/ProjectListView";
import ProjectDetailsView from "./views/ProjectDetailsView";
import "./App.css";

class App extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects = async () => {
    const projects = await axios.get("http://localhost:8000/api/projects");
    this.setState({
      projects: projects.data
    });
  };
  render() {
    if (!this.state.projects) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>

        <Route
          exact
          path="/projects"
          render={props => (
            <ProjectListView {...props} projects={this.state.projects} />
          )}
        />
        <Route
          path="/projects/:id"
          render={props => (
            <ProjectDetailsView {...props} projects={this.state.projects} />
          )}
        />
      </div>
    );
  }
}

export default App;
