import React, {Component} from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from '../components/navbar/navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Home from './Home.jsx';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <MyNavbar />
      </header>

      <main>
        <Router>
          <Switch>
          <Route path="/" component={Home} />
          </Switch>
        </Router>
      </main>

      <footer>
      <Footer />
      </footer>

    </div>
  );
 }

 export default MainLayout;
