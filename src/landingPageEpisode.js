/*
 * Library imports
 */
import React from "react";
import { render } from "react-dom";

/*
 * Component/Functionality/Data Imports
 */
import GoBackBtn from "./goBackBtn.js";
import { durationConvMin, durationConvSec, dateConv } from "./helpFunc.js";

/*
 * Landing page episodes - returns information
 * about the specific episode in a table
 */
class LandingPageEpisode extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m12 l12">
          <div class="card grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{this.props.episode.title}</span>
              <table class="white-text">
                <tbody>
                  <tr>
                    <td>Name of Podcast</td>
                    <td> </td>
                    <td>
                      <i>{this.props.episode.podcast.title}</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td> </td>
                    <td>
                      <i>{this.props.episode.description}</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td> </td>
                    <td>
                      <i>
                        {durationConvMin(this.props.episode.duration)}
                        {" minutes "}
                        {durationConvSec(this.props.episode.duration)}
                        {" seconds"}
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>Created</td>
                    <td> </td>
                    <td>
                      <i>{dateConv(this.props.episode.created)}</i>
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

export default LandingPageEpisode;
