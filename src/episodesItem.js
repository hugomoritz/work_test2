/*
 * Library imports
 */
import React from "react";
import { render } from "react-dom";

/*
 * Component/Functionality/Data Imports
 */
import { durationConvMin, durationConvSec, dateConv } from "./helpFunc.js";
import episodes from "./data/episodes.json";
import LandingPageEpisode from "./landingPageEpisode.js";

/*
 * Episode items - returns information about the specific episode for the card..
 */
class EpisodesItem extends React.Component {
  handleClick = (episodeDetail, e) => {
    e.preventDefault();
    render(
      <LandingPageEpisode episode={episodeDetail} />,
      document.getElementById("root")
    );
  };

  render() {
    return (
      <div class="row">
        {episodes.map((episodeDetail, index) => {
          return (
            <a href="" onClick={e => this.handleClick(episodeDetail, e)}>
              <div class="col s12 m12 l6">
                <div class="card grey darken-1 hoverable">
                  <div class="card-content white-text">
                    <span class="card-title">{episodeDetail.title}</span>
                    <p class="truncate">{episodeDetail.description}</p>
                    <p>
                      <i>
                        Duration: {durationConvMin(episodeDetail.duration)}
                        {" min "}
                        {durationConvSec(episodeDetail.duration)}
                        {" sec"}
                      </i>
                    </p>
                    <p>
                      <i>Created: {dateConv(episodeDetail.created)}</i>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default EpisodesItem;
