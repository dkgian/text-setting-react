import React, { Component } from 'react';
import './App.css';

import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Result from './components/Result'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentColor : 'red',
      currentFontSize : 20
    }

    this.onSetColor = this.onSetColor.bind(this);
    this.onSetFontSize = this.onSetFontSize.bind(this);
  }

  onSetColor(param){
    this.setState({
      currentColor : param
    })
  }

  onSetFontSize(param){
    this.setState({
      currentFontSize : param
    })
    console.log(this.state.currentFontSize)
  }

  render() {
    return (
      <div className="App">       
        <div className="row">     
          <ColorPicker 
            color = {this.state.currentColor}
            onReceiveColor = { this.onSetColor }
          />
          <SizeSetting 
            fontSize = {this.state.currentFontSize}
            onReceiveFontSize = {this.onSetFontSize}
            onReceiveColor = { this.onSetColor }
          />
        </div>
  
        <div className="row">
           <Result 
            color = {this.state.currentColor}
            fontSize = {this.state.currentFontSize}
           /> 
        </div>   
      </div>
    );
  }
}

export default App;
