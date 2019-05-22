import React from 'react';
import logo from './imgs/logo.png';
import Timer from './Timer.js'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="" />
          <h1>Coming Soon</h1>
          <p>We will be back with new and exciting feature!</p>
        </header>
        <main>
          <Timer date="07/15/19"></Timer>
          <p>Stay tuned for updates</p>
          <form id="form" action="">
            <input type="text" id="email" name="email" placeholder="Email Address" />
            <button id="button">Subscribe</button>
          </form>
        </main>
        <footer>
          <p>Copyright 2017 <strong id="blank">One</strong>. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}
export default App;
