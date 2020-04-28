import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import AppForm from "./AppForm";
import Listings from "./Listings";
import SingleListing from "./SingleListing";
import { SearchForm } from "./Forms/Search";

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/housera" component={Landing} />
        <Route exact path="/listings" component={Listings} />
        <Route path="/listings/:id" component={SingleListing} />
        <Route path="/search" component={SearchForm} />
        <Route component={AppForm} />
      </Switch>
    </main>
  );
};

export default App;
