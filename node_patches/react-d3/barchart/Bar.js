'use strict';

var React = require('react');
var PropTypes = require('prop-types')
var createReactClass = require('create-react-class');

module.exports = createReactClass({displayName: "exports",

  propTypes: {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    className: PropTypes.string
  },

  getDefaultProps:function() {
    return {
      offset: 0,
      className: 'rd3-barchart-bar'
    };
  },

  render:function() {
    return (
      React.createElement("rect", React.__spread({
        className: "rd3-barchart-bar"}, 
        this.props, 
        {fill: this.props.fill, 
        onMouseOver: this.props.handleMouseOver, 
        onMouseLeave: this.props.handleMouseLeave})
      )
    );
  }
});
