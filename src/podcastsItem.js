/*
 * Library imports
 */
import React from "react";
import { render } from "react-dom";

/*
 * Component/Functionality/Data Imports
 */
import podcasts from "./data/podcasts.json";
import LandingPagePodcast from "./landingPagePodcast.js";

/*
 * Podcasts items - returns information about the specific podcast for the card..
 */
class PodcastsItem extends React.Component {
  handleClick = (podcastDetail, e) => {
    e.preventDefault();
    render(
      <LandingPagePodcast podcast={podcastDetail} />,
      document.getElementById("root")
    );
  };
  render() {
    return (
      <div class="row">
        {podcasts.map((podcastDetail, index) => {
          return (
            <a href="" onClick={e => this.handleClick(podcastDetail, e)}>
              <div class="col s12 m12 l6">
                <div class="card blue-grey darken-1 hoverable">
                  <div class="card-content white-text">
                    <span class="card-title">{podcastDetail.title}</span>
                    <p class="truncate">{podcastDetail.description}</p>
                    <p>
                      <i>
                        Number of Episodes: {podcastDetail.numberOfEpisodes}
                      </i>
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

export default PodcastsItem;
