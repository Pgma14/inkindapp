import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withHistory, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Scrollchor from 'react-scrollchor';

import './navbar.css';

var $ = require('jquery');

export class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Navbar dark expand="md">
              <Container>
                <NavbarBrand>
                  <a className="navbar-brand_text" href="/"><span id="in">in</span><span id="kind">Kind</span></a>
                </NavbarBrand>
              <NavbarToggler className="navbar-toggle" onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto static-top" navbar>
                  <NavItem>
                    <NavLink className="MenuOptions" href="/">
                  <Scrollchor to="#How_It_Works" className="scroll" animate={{offset: 0, duration: 1000}}>
                <span className="MenuOptions">
                  How It Works
                </span>
                  </Scrollchor>
              </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="MenuOptions">
                <Scrollchor to="#what_we_do" className="scroll" animate={{offset: 0, duration: 800}}>
                    <span className="MenuOptions">
                      About
                    </span>
                </Scrollchor>
              </NavLink>
                  </NavItem>
                    <NavItem>
                 <NavLink className="MenuOptions">
                            <a className="navbar-brand_text" href="/demo">Demo</a>
                          {/*}  {% if current_user.is_anonymous %}
                            <a href="{{ url_for('login') }}">Login</a>
                            {% else %}
                            <a href="{{ url_for('logout') }}">Logout</a>
                            {% endif %} {*/}
              </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
            </Navbar>
          </Row>

      </Container>
      </div>
    );
  }
}



export default withRouter(MyNavbar);
