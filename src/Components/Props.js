import React from "react";
import Pass from "./pass";

class Props extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: true };
    }
    render() {
        return (
        <div>
            <button
            onClick={() => {
                this.setState({ change: !this.state.change });
            }}
            >
            Click Here!
            </button>
            {this.state.change ? (
            <Pass data="Welcome to GeeksforGeeks" />
            ) : (
            <Pass data="A Computer Science Portal for Geeks" />
            )}
        </div>
        );
    }
}
export default Props;
