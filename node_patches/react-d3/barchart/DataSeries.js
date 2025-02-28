'use strict';

var React = require('react');
var d3 = require('d3');
var BarContainer = require('./BarContainer');
var PropTypes = require('prop-types')
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    _data:          PropTypes.array,
    colors:         PropTypes.func,
    colorAccessor:  PropTypes.func,
    height:         PropTypes.number,
    width:          PropTypes.number,
    valuesAccessor: PropTypes.func,
  },

  render:function() {
    return (
      React.createElement("g", null, this._renderBarSeries())
    );
  },

  _renderBarSeries:function() {
    var $__0=     this.props,_data=$__0._data,valuesAccessor=$__0.valuesAccessor;
    return _data.map(function(layer, seriesIdx)  {
      return valuesAccessor(layer)
             .map(function(segment)  {return this._renderBarContainer(segment, seriesIdx);}.bind(this))
    }.bind(this));
  },

  _renderBarContainer:function(segment, seriesIdx) {
    var $__0=         this.props,colors=$__0.colors,colorAccessor=$__0.colorAccessor,height=$__0.height,hoverAnimation=$__0.hoverAnimation,xScale=$__0.xScale,yScale=$__0.yScale;
    return (
      React.createElement(BarContainer, {
        height: height - yScale(segment.y), 
        width: xScale.rangeBand(), 
        x: xScale(segment.x), 
        y: yScale( segment.y0 + segment.y), 
        fill: colors(colorAccessor(segment, seriesIdx)), 
        hoverAnimation: hoverAnimation}
      )
    )
  }

});
