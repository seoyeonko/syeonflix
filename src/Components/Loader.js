import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  height: 100wh;
  width: 100wv;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Loader = () => (
  <Conatiner>
    <span role="img" aria-label="Loading">
      ⏳⏳⏳ Loading ... ⏳⏳⏳
    </span>
  </Conatiner>
);

export default Loader;
