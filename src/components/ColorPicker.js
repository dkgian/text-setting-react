import React, { Component } from 'react';

import '../App.css';

class ColorPicker extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: ['black', 'green', 'blue', 'yellow','red','cyan']
    }
   // this.setActiveColor = this.setActiveColor.bind(this);
  }

  setActiveColor(color){
    this.props.onReceiveColor(color)
  }

  showColor(color){
    return {
        backgroundColor: color
      }; 
  }

  render() {
    var elementColors = this.state.color.map((color, index)=>{ 
      return(
        <span 
          key={index}
          style={ this.showColor(color) } 
          onClick = { () => this.setActiveColor(color) }
          className = {this.props.color === color ? 'isActive':''}
        >
        </span>  
      ) 
    })
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Color picker</h3>
            </div>
            <div className="panel-body">
              {elementColors}
              <hr/>
            </div>
        </div>  
      </div>
    );
  }
}

export default ColorPicker;
