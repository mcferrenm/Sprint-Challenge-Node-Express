import React from "react";
import axios from "axios";

class ProjectDetailsView extends React.Component {
  state = {
    actions: []
  };

  componentDidMount() {
    this.getActions();
  }

  getActions = async () => {
    const id = this.props.match.params.id
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
    return (
      <div>
        {this.state.actions.map(action => {
          return <p key={action.id}>{action.description}</p>;
        })}
      </div>
    );
  }
}

export default ProjectDetailsView;
