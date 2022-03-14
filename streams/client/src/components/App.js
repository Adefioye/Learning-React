import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

import history from "../history";

function App() {
  return (
    <>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/show" exact component={StreamShow} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact  component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
