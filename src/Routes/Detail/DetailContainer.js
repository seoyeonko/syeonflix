import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  // state
  state = {
    result: null, // id로 검색한 결과값
    error: null,
    loading: true,
  };

  // other logic: API, error handling

  // render method
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
