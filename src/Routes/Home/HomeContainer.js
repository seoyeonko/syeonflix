import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  // state
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    error: null,
    loading: true,
  };

  // other logic: API, error handling

  // render method
  render() {
    const { nowPlaying, upcomming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcomming={upcomming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
