import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './LandingHeader.css';

export default class LandingHeader extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.state = {
      findServiceClicked: false,
      listServiceClicked: false,
    };

    this.findServiceClick = this.findServiceClick.bind(this);
    this.listServiceClick = this.listServiceClick.bind(this);
    this.onBackChevronClick = this.onBackChevronClick.bind(this);

    this.toggle = this.toggle.bind(this);
  }

    findServiceClick() {
      this.setState({
        findServiceClicked: true,
      });
    }

    listServiceClick() {
      this.setState({
        listServiceClicked: true,
      });
    }

    onBackChevronClick() {
      this.setState({
        listServiceClicked: false,
        findServiceClicked: false,
      });
    }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {

    return (
      <div>
      <Container fluid className="Header_Background">
        <Row id="Header_Row1">
          <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
              <Col md="12" sm="12" xs="12" className="text-center" id="Logo">
                {this.state.findServiceClicked || this.state.listServiceClicked ? (
                  <h1 className="animated fadeIn">
                    Let's get started!
                  </h1>
                ) : (
                <div>
                  <h1 className="animated fadeIn">
                    Your life just got easier.
                  </h1>
                  <br></br>
                <h4>Gigs by students, for students.</h4>
                </div>
                )}
              </Col>
              <Col md="12" sm="12" xs="12" className="text-center" id="alert-signup" >
                {this.state.findServiceClicked ? (
                  <div>
                    <form>
                      <input>

                      </input>
                    </form>
                  </div>
                ) : this.state.listServiceClicked ? (
                  <div>
                        a
                  </div>
                ) : (
                  <div>
                    <Button onClick={this.findServiceClick} color="primary" id="findservicebutton"><span>Find a service</span></Button>
                    <Button onClick={this.listServiceClick} color="primary" id="listservicebutton"><span>List a service</span></Button>
                  </div>
                )}
              </Col>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
