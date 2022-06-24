import { React, Component } from "react";
import Childcomponent from "./childComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Select-a-color"
    };
    
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newColor) {
    this.setState({
      color: newColor
    });
  }

  render() {
    const selectedColor = {
      color:this.state.color
    };
    return (
      <div>
          <h1>ParentComponent</h1>
        {
          <>
            {console.log(this.state.color)}
            <p style={selectedColor}> color: {this.state.color} </p>
            <Childcomponent changeColor={this.changeColor} />
          </>
        }
      </div>
    );
  }
}