import React from "react";
import { moviesApi, TVApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  // state
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  // other logic : input 값으로 검색하고 리턴값을 받을 때 작동
  // handle submit: 누군가 폼에서 text를 입력하고, 엔터를 누르면 handleSubmit이 됨
  handleSubmit = (event) => {
    event.preventDefault();

    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    // console.log(value);
    this.setState({
      searchTerm: value,
    });
  };

  // searchByTerm
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true }); // 검색후 loading: true 값으로 변경
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await TVApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch {
      this.state({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  // render method
  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
export default SearchContainer;
