import React from 'react';
import logo from './imgs/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
        <h1>Coming Soon</h1>
        <p>We will be back with new and exciting feature!</p>
      </header>
      <main>
        <div id="timer">
          <div id="days">
            <p className="number">27</p>
            <p className="time">DAYS</p>
          </div>
          <div id="hours">
            <p className="number">08</p>
            <p className="time">HOURS</p>
          </div>
          <div id="minutes">
            <p className="number">34</p>
            <p className="time">MINUTES</p>
          </div>
          <div id="seconds">
            <p className="number">15</p>
            <p className="time">SECONDS</p>
          </div>
        </div>
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

export default App;
