import {React} from "react";

export default function Childcomponent(props) {
  const handleClick = e => props.changeColor(e.target.value);
  return (
       <>
  <div className="child-component">
  <h2>Child-Component</h2>
  <button value="Red" onClick={handleClick}>
  Red
  </button>
  <button value="Blue" onClick={handleClick}>
  Blue
  </button>
  <button value="Green" onClick={handleClick}>
  Green
  </button>
  </div>
  </>
  );
  }