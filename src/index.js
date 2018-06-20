import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Globe extends React.Component {
  /* Function to change orbit and spin speed*/
  change() {
    /*alert('Working');*/

    var numbers = /^[0-9]+$/;
    var in1 = document.getElementById('input1').value;
    var in2 = document.getElementById('input2').value;

    var input1 =
      'rotate ' + document.getElementById('input1').value + ' linear infinite';
    var input2 =
      'spin ' + document.getElementById('input2').value + ' linear infinite';

    /*Validation to check if input is number only and not empty*/
    if (in1 == '' || in2 == '') {
      alert('please enter orbit speed and spin speed in the form');
    } else {
      if (in1.match(numbers) && in2.match(numbers)) {
        /* To change orbit speed*/
        Array.from(document.getElementsByClassName('moon')).forEach(elem => {
          elem.style.animation = input1;
        });
        /* To change spin speed*/
        Array.from(document.getElementsByClassName('')).forEach(elem => {
          elem.style.animation = input2;
        });
      } else {
        alert('Enter numbers only in the form');
      }
    }
  }

  /*Function to change planet*/
  planet() {
    /*alert('Working');*/
    var myPics = new Array('./jupiter.jpg', './mars.jpg', './neptune.png');

    /*To get a random planet from the array on clicking change planet*/
    var randomNum = Math.floor(Math.random() * myPics.length);

    /*Setting the random planet as the background-image*/
    Array.from(document.getElementsByClassName('earth')).forEach(elem => {
      elem.style.backgroundImage = myPics[randomNum];
    });
  }

  render() {
    return (
      <div className="parent">
        <div className="center">
          <div className="earth">
            <div className="moon" />
          </div>
        </div>
        <div className="frm">
          <form className="form">
            <h2>Orbit Speed Handler</h2>
            <p type="Orbit Speed">
              <input id="input1" placeholder="Enter Orbit speed here.." />
            </p>
            <p type="Spin speed">
              <input id="input2" placeholder="Enter spin speed here.." />
            </p>
            <button onClick={this.change}>Change orbit speed</button>
            <button onClick={this.planet}>Change the planet</button>
            <div />
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Globe />, document.getElementById('root'));
