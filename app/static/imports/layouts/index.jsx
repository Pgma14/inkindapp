import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from "./App";
import MainLayout from './MainLayout.jsx';

ReactDOM.render(<Router>
    <Switch>
    <Route path="/" component={MainLayout} />
    </Switch>
  </Router>, document.getElementById("content"));
