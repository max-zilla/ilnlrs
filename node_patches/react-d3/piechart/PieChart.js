'use strict';

var d3 = require('d3');
var React = require('react');
var DataSeries = require('./DataSeries');
var Chart = require('../common').Chart;
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'PieChart',

  propTypes: {
    data:               PropTypes.array,
    radius:             PropTypes.number,
    cx:                 PropTypes.number,
    cy:                 PropTypes.number,
    labelTextFill:      PropTypes.string,
    valueTextFill:      PropTypes.string,
    valueTextFormatter: PropTypes.func,
    colors:             PropTypes.func,
    colorAccessor:      PropTypes.func,
    title:              PropTypes.string,
    showInnerLabels:    PropTypes.bool,
    showOuterLabels:    PropTypes.bool,
    sectorBorderColor:  PropTypes.string,
    hoverAnimation:     PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      data:               [],
      title:              '',
      colors:             d3.scale.category20c(),
      colorAccessor:      function(d, idx)  {return idx;},
      valueTextFormatter: function(val)  {return ( val + "%");},
      hoverAnimation:     true
    };
  },

  render: function() {
    var props = this.props;

    var transform = ("translate(" + ( props.cx || props.width/2) + "," + ( props.cy || props.height/2) + ")");

    var values = props.data.map( function(item)  {return item.value;} );
    var labels = props.data.map( function(item)  {return item.label;} );

    return (
      React.createElement(Chart, {
        width: props.width, 
        height: props.height, 
        title: props.title
      }, 
        React.createElement("g", {className: "rd3-piechart"}, 
          React.createElement(DataSeries, {
            labelTextFill: props.labelTextFill, 
            valueTextFill: props.valueTextFill, 
            valueTextFormatter: props.valueTextFormatter, 
            data: props.data, 
            values: values, 
            labels: labels, 
            colors: props.colors, 
            colorAccessor: props.colorAccessor, 
            transform: transform, 
            width: props.width, 
            height: props.height, 
            radius: props.radius, 
            innerRadius: props.innerRadius, 
            showInnerLabels: props.showInnerLabels, 
            showOuterLabels: props.showOuterLabels, 
            sectorBorderColor: props.sectorBorderColor, 
            hoverAnimation: props.hoverAnimation}
          )
        )
      )
    );
  }

});
