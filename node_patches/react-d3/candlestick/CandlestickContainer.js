'use strict';

var React = require('react');
var d3 = require('d3');
var utils = require('../utils');
var Candle = require('./Candle');
var Wick = require('./Wick');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'CandleStickContainer',

  propTypes: {
    candle_x:       PropTypes.number,
    candle_y:       PropTypes.number,
    className:      PropTypes.string,
    candleFill:     PropTypes.string,
    candleHeight:   PropTypes.number,
    candleWidth:    PropTypes.number,
    wick_x1:        PropTypes.number,
    wick_x2:        PropTypes.number,
    wick_y1:        PropTypes.number,
    wick_y2:        PropTypes.number,
  },

  getDefaultProps:function() {
    return {
      className: 'rd3-candlestick-container'
    };
  },

  getInitialState:function() {
    // state for animation usage
    return {
      candleWidth: this.props.candleWidth,
      candleFill: this.props.candleFill
    };
  },

  render:function() {

    var props = this.props;
    var state = this.state;

    // animation controller
    var handleMouseOver, handleMouseLeave;
    if(props.hoverAnimation) {
      handleMouseOver = this._animateCandle;
      handleMouseLeave = this._restoreCandle;
    } else {
      handleMouseOver = handleMouseLeave = null;
    }

    return (
      React.createElement("g", {className: props.className}, 
       React.createElement(Wick, {
         wick_x1: props.wick_x1, 
         wick_x2: props.wick_x2, 
         wick_y1: props.wick_y1, 
         wick_y2: props.wick_y2}
       ), 
       React.createElement(Candle, {
         candleFill: state.candleFill, 
         candleWidth: state.candleWidth, 
         candle_x: props.candle_x - ((state.candleWidth - props.candleWidth) / 2), 
         candle_y: props.candle_y, 
         candleHeight: props.candleHeight, 
         handleMouseOver: handleMouseOver, 
         handleMouseLeave: handleMouseLeave}
       )
      )
    );
  },

  _animateCandle:function() {
    this.setState({ 
      candleWidth: this.props.candleWidth * 1.5,
      candleFill: utils.shade(this.props.candleFill, -0.2)
    });
  },

  _restoreCandle:function() {
    this.setState({ 
      candleWidth: this.props.candleWidth,
      candleFill: this.props.candleFill
    });
  },

});
