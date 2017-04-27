var React = require('react');
var ReactDOM = require('react-dom');
var yellow = 'rgb(255, 215, 18)';

var TopNumber = React.createClass({
  propTypes: {
    number: React.PropTypes.number,
    game: React.PropTypes.bool
  },

  getInitialState: function () {
    return { 'highest': 0 };
  },

  render: function () {
    return (
      <h1>
        Top Number: {this.props.number}
      </h1>
    );
  }
});

module.exports = TopNumber;