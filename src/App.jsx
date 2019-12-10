import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Landing from "./Landing";
import AppForm from "./AppForm";

const Main = styled.main`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={AppForm} />
      </Switch>
    </Main>
  );
};

export default App;
