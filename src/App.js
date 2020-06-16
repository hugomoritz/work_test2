import React from "react";
import PodcastsItem from "./podcastsItem.js";
import EpisodesItem from "./episodesItem.js";

/*
 * Main applikation, gives two card lists with podcasts and episodes
 */
function App() {
  return (
    <div class="row">
      <div>
        <div class="col s12 m6 l6 center">
          <h4>Podcasts</h4>
          <div class="col s12 m12 l12 center">
            <PodcastsItem />
          </div>
        </div>
        <div class="col s12 m6 l6 center">
          <h4>Episodes</h4>
          <div class="col s12 m12 l12 center">
            <EpisodesItem />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default App;
