'use strict';

var React = require('react');
var mixins = require('../../mixins');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'BasicChart',

  propTypes: {
    children:       PropTypes.node,
    className:      PropTypes.string,
    height:         PropTypes.node,
    svgClassName:   PropTypes.string,
    title:          PropTypes.node,
    titleClassName: PropTypes.string,
    width:          PropTypes.node
  },

  getDefaultProps:function() {
    return {
      className:      'rd3-basic-chart',
      svgClassName:   'rd3-chart',
      titleClassName: 'rd3-chart-title'
    };
  },

  _renderTitle:function() {
    var props = this.props;

    if (props.title != '' && props.title != null) {
      return (
        React.createElement("h4", {
          className: props.titleClassName
        }, 
          props.title
        )
      );
    } else {
      return null;
    }
  },

  _renderChart: function() {
    var props = this.props;

    return (
      React.createElement("svg", {
        className: props.svgClassName, 
        height: props.height, 
        viewBox: props.viewBox, 
        width: props.width
      }, 
        props.children
      )
    );
  },

  render: function() {
    var props = this.props;

    return (
      React.createElement("div", {
        className: props.className
      }, 
        this._renderTitle(), 
        this._renderChart()
      )
    );
  }
});
