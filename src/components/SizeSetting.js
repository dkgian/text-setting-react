import React, { Component } from 'react';
import '../App.css';


class SizeSetting extends Component {

  onBiggerFontSize = () =>{
      this.props.onReceiveFontSize(this.props.fontSize + 1)
  }

  onSmallerFontSize = ()=> {
      this.props.onReceiveFontSize(this.props.fontSize - 1)
  }

  onReset = ()=>{
    this.props.onReceiveFontSize(20);
    this.props.onReceiveColor('black')
  }

  render() {
    
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
        <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Size: {this.props.fontSize} px</h3>
            </div>
            <div className="panel-body">
              <button onClick={ this.onBiggerFontSize } type="button" className="btn btn-default">Bigger </button>&nbsp;
              <button onClick={ this.onSmallerFontSize }type="button" className="btn btn-default">Smaller </button> 
            </div>
            <button onClick={ this.onReset } type="button" className="btn btn-danger">Reset</button>
        </div>
        
      </div>
    );
  }
}

export default SizeSetting;
