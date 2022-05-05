import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: true };
    }
    render() {
        return (
            <>
                <button onClick={() => {
                    this.setState({ change: !this.state.change });
                }}>Click Here!</button>
                {this.state.change ?(
                    <h1>Welcome to my page</h1>
                ):(
                    <h1>A Computer Science Portal </h1>
                )}
            </>
        )
    }
}
export default State;