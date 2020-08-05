import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";

   import Page1 from "./PostList";
   import Page2 from "./PostDetailedView";

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/PostDetailedView" component={Page2} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );