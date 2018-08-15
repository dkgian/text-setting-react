import React, { Component } from 'react';
import '../App.css';

class Result extends Component {
    
    constructor(props){
        super(props);
        this.setStyle = this.setStyle.bind(this)
    }
    setStyle = () => {
        return  {
            color : this.props.color,
            fontSize : this.props.fontSize
        }
    
    }
  render() {

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             
        <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Color: {this.props.color} - Fontsize: {this.props.fontSize} px</h3>
            </div>
            <div className="panel-body content result" style = { this.setStyle() }>
               THIS IS A SIMPLE TEXT! <br/>
               
               <input width="200px" type="text"/>
               
            </div>
        </div>
      </div>
    );
  }
}

export default Result;
