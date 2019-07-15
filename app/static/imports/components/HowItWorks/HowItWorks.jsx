import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import './HowItWorks.css';

export default class HowItWorks extends Component {
  render () {
    return (
      <Container fluid className="text-center" id="How_It_Works">
        <Row>
          <Col md="12" sm="12" xs="12" className="text-center" id="HowItWorks-background">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
            <div id="How_It_Works_container">
                <h1 id="How_It_Works_h1">How It Works</h1>
            </div>
              <Container>
              <Row id="HowItWorksRow">
                  <Col lg="4" md="4" sm="4" xs="12" className="HowItWorksIconSection text-center">
                    <i className="HowItWorksIcons fas fa-user" />
                    <h3 className="text-center">Sign up with your e-mail. Let us know a little about you.</h3>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="12" className="HowItWorksIconSection text-center">
                    <i className="HowItWorksIcons fas fa-mobile-alt" />
                    <h3>Get connected with someone who can get the job done.</h3>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="12" className="HowItWorksIconSection text-center">
                    <i className="HowItWorksIcons fa fa-rocket" />
                    <h3>Save time, go on an adventure.</h3>
                  </Col>
              </Row>
             </Container>
                 </ScrollAnimation>
          </Col>
        </Row>
      </Container>

    )
  }
}
