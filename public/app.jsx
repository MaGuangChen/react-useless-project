var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var firstName = 'Paul';
var messageForUser = "howdy punk"

ReactDOM.render(
  <Greeter name={firstName} message={messageForUser} />,
  document.getElementById('app')
);