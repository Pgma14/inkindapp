import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withHistory, withRouter, Link } from 'react-router-dom';

import '../LandingHeader/LandingHeader.css';
import './Demo.css';

class Demo extends Component {

  render () {
    return (
    <div>
    <Container fluid className="Header_Background">
      <Row id="Header_Row1">
        <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">

              <Row className="animated fadeIn">


                <Col md="4" sm="4" xs="4" className="text-center">
                  Step 1
                  <img src="iphone.jpg" alt="Italian Trulli" height="100px" width="100px" />
                </Col>

                <Col md="4" sm="4" xs="4" className="text-center">

                Step 2
                <img src="../../images/iphone.jpg" alt="Italian Trulli" />
                </Col>

              <Col md="4" sm="4" xs="4" className="text-center">
                Step 3
                <img src="../../images/iphone.jpg" alt="Italian Trulli" />

              </Col>

              </Row>

        </Col>
      </Row>
    </Container>





    </div>
    )
  }
}

export default withRouter(Demo);
