import React from "react";
import Hello from "../components/Hello";

export default class App extends React.Component {
  render () {
    return (
      <div className='header-contents'>
        <Hello name='Rimini' />
      </div>
    );
  }
}