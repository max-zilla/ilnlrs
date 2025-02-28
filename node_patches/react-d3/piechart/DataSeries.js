'use strict';

var React = require('react');
var d3 = require('d3');
var ArcContainer = require('./ArcContainer');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    data:              PropTypes.array,
    values:            PropTypes.array,
    labels:            PropTypes.array,
    transform:         PropTypes.string,
    innerRadius:       PropTypes.number,
    radius:            PropTypes.number,
    colors:            PropTypes.func,
    colorAccessor:     PropTypes.func,
    showInnerLabels:   PropTypes.bool,
    showOuterLabels:   PropTypes.bool,
    sectorBorderColor: PropTypes.string
  },

  getDefaultProps:function() {
    return {
      data:          [],
      innerRadius:   0,
      colors:        d3.scale.category20c(),
      colorAccessor: function(d, idx)  {return idx;}
    };
  },

  render:function() {

    var props = this.props;

    var pie = d3.layout
      .pie()
      .sort(null);

    var arcData = pie(props.values);

    var arcs = arcData.map(function(arc, idx)  {
      return (
        React.createElement(ArcContainer, {
          key: idx, 
          startAngle: arc.startAngle, 
          endAngle: arc.endAngle, 
          outerRadius: props.radius, 
          innerRadius: props.innerRadius, 
          labelTextFill: props.labelTextFill, 
          valueTextFill: props.valueTextFill, 
          valueTextFormatter: props.valueTextFormatter, 
          fill: props.colors(props.colorAccessor(props.data[idx], idx)), 
          value: props.values[idx], 
          label: props.labels[idx], 
          width: props.width, 
          showInnerLabels: props.showInnerLabels, 
          showOuterLabels: props.showOuterLabels, 
          sectorBorderColor: props.sectorBorderColor, 
          hoverAnimation: props.hoverAnimation}
        )
      );
    });
    return (
      React.createElement("g", {className: "rd3-piechart-pie", transform: props.transform}, 
        arcs
      )
    );
  }
});
