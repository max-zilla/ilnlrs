'use strict';

var React = require('react');
var LegendChart = require('./LegendChart');
var BasicChart = require('./BasicChart');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'Chart',

  propTypes: {
    legend:         PropTypes.bool,
    svgClassName:   PropTypes.string,
    titleClassName: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      legend:         false,
      svgClassName:   'rd3-chart',
      titleClassName: 'rd3-chart-title'
    };
  },

  render: function() {
    var props = this.props;

    if (props.legend) {
      return (
        React.createElement(LegendChart, React.__spread({
          svgClassName: props.svgClassName, 
          titleClassName: props.titleClassName}, 
          this.props)
        )
      );
    }
    return (
      React.createElement(BasicChart, React.__spread({
        svgClassName: props.svgClassName, 
        titleClassName: props.titleClassName}, 
        this.props)
      )
    );
  }

});
