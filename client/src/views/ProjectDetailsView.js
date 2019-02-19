import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ProjectDetailsView extends React.Component {
  state = {
    actions: []
  };

  componentDidMount() {
    this.getActions();
  }

  getActions = async () => {
    const id = this.props.match.params.id;
    const actions = await axios.get(
      `http://localhost:8000/api/projects/${id}/actions`
    );
    this.setState({
      actions: actions.data
    });
  };
  render() {
    if (!this.state.actions) {
      return <div>Loading...</div>;
    }
    const project = this.props.projects.find(
      project => project.id === Number(this.props.match.params.id)
    );

    return (
      
      <div className="actions-list">
        <Link to="/projects">Back</Link>
        <h1>Actions for {`${project.name}`}:</h1>
        {this.state.actions.map(action => {
          return (
            <div key={action.id} className="action-item">
              <p>Description: {action.description}</p>
              <p>Notes: {action.notes}</p>
            </div>
          );
        })}
        <Link to="/projects">Back</Link>
      </div>
    );
  }
}

export default ProjectDetailsView;
