var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var name = 'Jonathan';

ReactDOM.render(
    <Greeter name={name}/>, document.getElementById('app'));
