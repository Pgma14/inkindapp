import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './Home.css';

import LandingHeader from '../components/LandingHeader/LandingHeader.jsx';
import Login from '../components/Forms/Login.jsx';
import WhatWeDoV2 from '../components/WhatWeDoV2/WhatWeDoV2.jsx';
import HowItWorks from '../components/HowItWorks/HowItWorks.jsx';
import Demo from '../components/Forms/Demo.jsx';

export default class Home extends Component {
render() {
    return (
  <div>
    <Container fluid>

        <Container fluid>
        <Router>
          <Switch>
          <Route exact path="/" component={LandingHeader} />
          <Route path="/login" component={Login} />
          <Route path="/demo" component={Demo} />
          </Switch>
        </Router>
        </Container>

        <Container fluid>
          <HowItWorks />
        </Container>

        <Container fluid>
          <WhatWeDoV2 />
        </Container>

        <Container>
        </Container>

        <Container fluid>
        </Container>

        <Container fluid>
        </Container>

    </Container>
  </div>
    );
  }
}
