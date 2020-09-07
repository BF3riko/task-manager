import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import './sass/style.scss';

import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>

        <Route exact path='/:id'>
          {(props) => {
            return (
              <DetailPage
                id={Number(props.match.params.id)}
              />
            )
          }}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
