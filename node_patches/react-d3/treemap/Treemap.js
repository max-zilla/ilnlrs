'use strict';

var d3 = require('d3');
var React = require('react');
var Chart = require('../common').Chart;
var DataSeries = require('./DataSeries');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'Treemap',

  propTypes: {
    data:           PropTypes.array,
    margins:        PropTypes.object,
    width:          PropTypes.number,
    height:         PropTypes.number,
    title:          PropTypes.string,
    textColor:      PropTypes.string,
    fontSize:       PropTypes.oneOfType([
                      PropTypes.string,
                      PropTypes.number
                    ]),
    colors:         PropTypes.func,
    colorAccessor:  PropTypes.func,
    hoverAnimation: PropTypes.bool
  },

  getDefaultProps:function() {
    return {
      hoverAnimation: true,
      data:           [],
      width:          400,
      heigth:         200,
      title:          '',
      textColor:      '#f7f7f7',
      fontSize:       '0.85em',
      colors:         d3.scale.category20c(),
      colorAccessor:  function(d, idx)  {return idx;},
    };
  },

  render:function() {

    var props = this.props;

    return (
      React.createElement(Chart, {
        title: props.title, 
        width: props.width, 
        height: props.height
      }, 
        React.createElement("g", {className: "rd3-treemap"}, 
          React.createElement(DataSeries, {
            data: props.data, 
            width: props.width, 
            height: props.height, 
            colors: props.colors, 
            colorAccessor: props.colorAccessor, 
            textColor: props.textColor, 
            fontSize: props.fontSize, 
            hoverAnimation: props.hoverAnimation}
          )
        )
      )
    );
  }

});
