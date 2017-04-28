var React = require('react');

var Enthused = React.createClass({
  interval: null,

  componentDidMount: function () {
    this.interval = setInterval(function(){
      this.props.addText('!');
    }.bind(this), 15);
  },

  render: function () {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
});

module.exports = Enthused;