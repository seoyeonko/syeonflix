import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

class HomeContainer extends React.Component {
  // state
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  // other logic: API, error handling
  // async componentDidMount() {
  //   try {
  //     // API가 return 될 때까지 기다리지 않음 -> async/await 작업
  //     // 작업이 끝날때까지 기다림
  //     const {
  //       data: { results: nowPlaying },
  //     } = await moviesApi.nowPlaying();
  //     const {
  //       data: { results: upcoming },
  //     } = await moviesApi.upcoming();
  //     const {
  //       data: { results: popular },
  //     } = await moviesApi.popular();
  //     this.setState({
  //       nowPlaying,
  //       upcoming,
  //       popular,
  //     }); // nowPlaying: nowPlaning === nowPlaying (javascript)
  //   } catch {
  //     this.setState({
  //       error: "Can't find Movies Informations.",
  //     });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // }
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movie information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  // render method
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log("hi");
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
export default HomeContainer;
