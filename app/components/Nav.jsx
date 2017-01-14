var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render: function(){
      return (
        <div>
          <h2>This is nav component</h2>
          <Link to="/">Get Weather</Link>
          <br/>
          <Link to="/about">About</Link>
        </div>
      );
    }
});

module.exports = Nav;
