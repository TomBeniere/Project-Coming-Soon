import React from 'react';
import logo from './imgs/logo.png';
import Timer from './Timer.js'
import Icon from './imgs/icon.png';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      display: false,
      myInputValue: "",
      error: false,
    };
  }

  clickOnSubscribe(evt) {
    evt.preventDefault();
    if (this.state.myInputValue.indexOf("@") < 0) {
      this.state.display = false;
      this.error = true;
      this.state.myInputValue = "Erreur";
      //this.state.myInputValue.style.color = "red";
    } else {
      this.state.display = true;
    }

    this.setState(this.state);


  }

  clickOnCross() {

    this.state.display = false;
    this.setState(this.state);



  }

  render() {
    var modal;

    if (this.state.display) {
      modal = <div id="myModal" className={this.state.display}>
        <div className="modal-content">
          <button className="closeModal" onClick={this.clickOnCross.bind(this)}>x</button>
          <p id="blacked">Merci Pour Votre Confiance! <br />
            Vous recevrez prochainement des informations sur votre adresse e-mail <br />
            <strong>{this.state.myInputValue}</strong></p>
        </div>
      </div>;
    }

    var input = <input type="email" id="email" name="email" placeholder="Email Address" onChange={(evt) => this.setState({ myInputValue: evt.target.value })} value={this.state.myInputValue} required />;
    if (this.state.error) {
      input = <input type="email" id="email" name="email" placeholder="Email Address" onChange={(evt) => this.setState({ myInputValue: evt.target.value })} value={this.state.myInputValue} required />;

    }


    return (
      <div className="App">
        <header>
          <img src={logo} alt="" />
          <h1>Coming Soon</h1>
          <p>We will be back with new and exciting feature!</p>
        </header>
        <main>
          <Timer date="07/12/19"></Timer>
          {modal}
          <p>Stay tuned for updates</p>
          <form id="form">
            <img src={Icon} id="icon" alt="" />
            {input}
            <button id="myBtn" onClick={this.clickOnSubscribe.bind(this)}>SUBSCRIBE</button>
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
