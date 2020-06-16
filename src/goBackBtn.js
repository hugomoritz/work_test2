/*
 * Library imports
 */
import React from "react";
import { render } from "react-dom";

/*
 * Component/Functionality/Data Imports
 */
import App from "./App.js";

/*
 * Return button - returns to App component
 */
class GoBackBtn extends React.Component {
  handleClick(e) {
    e.preventDefault();
    render(<App />, document.getElementById("root"));
  }

  render() {
    return (
      <div class="col s12 m12 l12">
        <a
          class="col s12 m12 l12 card grey btn-large"
          onClick={this.handleClick.bind(this)}
        >
          GO BACK TO LIST
        </a>
      </div>
    );
  }
}

export default GoBackBtn;
