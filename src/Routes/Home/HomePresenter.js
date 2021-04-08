import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, popular, upcomming, loading, error }) =>
  null;

HomePresenter.PropTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcomming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
