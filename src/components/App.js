import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ConfirmProvider } from "material-ui-confirm";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { fetchData } from '../actions'

import Header from './Common/Header';
import MainPage from './MainPage/MainPage';
import BonusPage from './BonusPage/BonusPage';
import ErrorPage from './ErrorPage/ErrorPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <ConfirmProvider>
      <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/bonus" component={BonusPage}/>
            <Route component={ErrorPage}/>
          </Switch>
      </BrowserRouter>
    </ConfirmProvider>
  );
}

export default App;
