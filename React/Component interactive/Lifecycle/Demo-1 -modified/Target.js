var React = require('react');
var random = require('./helpers').random;

var Target = React.createClass({
  propTypes: {
    number: React.PropTypes.number.isRequired
  },

  render: function () {
    var visibility = this.props.number
      ? 'visible' : 'hidden';
    var style = {
      position: 'absolute',
      left: random(100) + '%',
      top:  random(100) + '%',
      fontSize: 40,
      cursor: 'pointer',
      visibility: visibility
    };

    return (
      <span 
        style={style} 
        className="target" >
        {this.props.number}
      </span>
    )
  }
});

module.exports = Target;