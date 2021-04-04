import React from "react";
import { moviesApi, TVApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    // state
    this.state = {
      result: null, // id로 검색한 결과값
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"), // pathname이 "movie"를 갖는지 확인
    };
  }

  // other logic: API, error handling
  async componentDidMount() {
    // props 가져오기 (비구조화 할당)
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    // id값이 숫자인지 확인 (숫자가 아니라면 홈으로 이동)
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetails(parsedId));
        // const request = await moviesApi.movieDetails(parsedId);
        // result = request.data;
      } else {
        ({ data: result } = await TVApi.movieDetails(parsedId));
        // const request = await TVApi.showDtails(parsedId);
        // result = request.data;
      }
      // console.log(result);
    } catch {
      this.setState({ error: "Cant't fint anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  // render method
  render() {
    const { result, error, loading } = this.state;
    // console.log(this.props);
    console.log(result);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
export default DetailContainer;
