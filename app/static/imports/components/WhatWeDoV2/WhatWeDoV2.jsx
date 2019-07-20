import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import './WhatWeDoV2.css';

export default class WhatWeDoV2 extends Component {
  render () {
    return (
      <Container fluid className="section-what_we_do text-center" id="what_we_do">
        <Row>
          <Col md="12" sm="12" xs="12" className="what_we_do-background text-center" id="what_we_do-background">
            <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
              <Container>
            <div id="what_we_do_container">
                <h1 id="what_we_do_h1">Who are we</h1>
                  <center>
                      <p className="heading-subtext-bolder">
                      </p>
                  </center>
                  <center>
                      <p className="heading-subtext">
                        inKind was founded by students at Columbia University and Sciences Po Paris to connect people with items or services to donate with organizations that need their donations. 
                      </p>
                  </center>
            </div>
            </Container>
          </ScrollAnimation>
          </Col>
        </Row>
      </Container>

    )
  }
}
