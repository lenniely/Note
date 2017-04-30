var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');

var Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
	
  changeName: function(newName){
    this.setState({name: newName});
  },
  

  render: function () {
    return (
    	<Child onChange={this.changeName}
    		name={this.state.name} />
    );
  }
});

ReactDOM.render(
	<Parent />, 
	document.getElementById('app')
);