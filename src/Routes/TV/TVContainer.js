import React from "react";
import TVPresenter from "./TVPresenter";
import { TVApi } from "../../api";

class TVContainer extends React.Component {
  //state
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  // other logic
  componentDidMount = async () => {
    try {
      const {
        data: { results: topRated },
      } = await TVApi.topRated();
      const {
        data: { results: popular },
      } = await TVApi.popular();
      const {
        data: { results: airingToday },
      } = await TVApi.airingToday();
      // console.log(topRated, popular, airingToday);
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({ error: "Can't find TV information." });
    } finally {
      this.setState({ loading: false });
    }
  };

  // render method
  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
export default TVContainer;
