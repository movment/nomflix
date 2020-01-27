import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import TV from 'routes/TV';
import Header from 'components/Header';
import Search from 'routes/Search';
import Detail from 'routes/Detail';

const Router = () => {
  return (
    <HashRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/show/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </HashRouter>
  );
};

export default Router;
