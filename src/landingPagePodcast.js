/*
 * Library imports
 */
import React from "react";
import { render } from "react-dom";

/*
 * Component/Functionality/Data Imports
 */
import GoBackBtn from "./goBackBtn.js";

/*
 * Landing page podcast - returns information
 * about the specific podcast in a table
 */
class LandingPagePodcast extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m12 l12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{this.props.podcast.title}</span>
              <table class="white-text">
                <tbody>
                  <tr>
                    <td>Description</td>
                    <td> </td>
                    <td>
                      <i>{this.props.podcast.description}</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Number of Episodes</td>
                    <td> </td>
                    <td>
                      <i>{this.props.podcast.numberOfEpisodes}</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <GoBackBtn />
      </div>
    );
  }
}

export default LandingPagePodcast;
