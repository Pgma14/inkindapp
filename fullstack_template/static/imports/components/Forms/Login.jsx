import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withHistory, withRouter, Link } from 'react-router-dom';

import '../LandingHeader/LandingHeader.css';
import './Login.css';

var $ = require('jquery');

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitEmail() {
  $.post(window.location.href + 'EMAIL', (data) => {
    console.log(data);
  });
  }

  handleSubmit(e){
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('PasswordInput').value;
  }

  render () {
    const error = this.state.error;
    return (
    <div>
    <Container fluid className="Header_Background">
      <Row id="Header_Row1">
        <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
            <Col md="12" sm="12" xs="12" className="text-center" id="Logo">
              <div>
                <h1 className="animated fadeIn">
                  Let's get started!
                  </h1>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                <Col md="12" sm="12" xs="12" className="text-center">
              <input
                id="login-email"
                className="alert-signup-input"
                placeholder="E-mail"
                type="email"
                name="EMAIL"
              />
                </Col>

                <Col md="12" sm="12" xs="12" className="text-center">
              <input id="PasswordInput"
               className="alert-signup-input"
               placeholder="Password"
               type="password"
               name="password"
               />
                </Col>

              <Col md="12" sm="12" xs="12" className="text-center" id="alert-signup">
                <Button
                  type="submit"
                  color="primary"
                  id="findservicebutton"
                  className="text-center"
                  onClick={this.submitEmail}
                >
                  <span>Sign Up</span>
                </Button>

              </Col>
                  </form>
              </div>
            </Col>

        </Col>
      </Row>
    </Container>





    </div>
    )
  }
}

export default withRouter(Login);
