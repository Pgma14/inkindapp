import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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

                <div>
                  <h1 className="animated fadeIn">
                    Donations made easy.
                  </h1>
                  <br></br>
                <h4>Find organizations that need your items or services.</h4>
                </div>

              </Col>
              <Col md="12" sm="12" xs="12" className="text-center" id="alert-signup" >
                  <div>
                  <Button onClick={this.findServiceClick} color="primary" id="findservicebutton">{/*}<Link to="/login">{*/}<span>Donate items</span>{/*}</Link to="/login">{*/}</Button>
                  <Button onClick={this.listServiceClick} color="primary" id="listservicebutton">{/*}<Link to="/login">{*/}<span>Donate services</span>{/*}</Link to="/login">{*/}</Button>
                  </div>
              </Col>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
