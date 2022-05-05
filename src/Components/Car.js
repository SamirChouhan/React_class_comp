import React from "react";

class Garage extends React.Component{
  render(){
    return(
      <>
      <h1>This is Car</h1>
      </>
    )
  }
}

class Car extends React.Component {
  render() {
    return (
      <>
      <Garage/>
        <h1>
          Hi i am Mustang
        </h1>
      </>
    )
  }
}
export default Car;