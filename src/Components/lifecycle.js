import React from "react";

class Lifecycle extends React.Component {
constructor(props) {
	super(props);
	this.state = { text: "Welcome!" };
}

componentWillMount() {
	this.setState({
	text: "GeeksforGeeks",
	});
}

render() {
	return <h1>{this.state.text}</h1>;
}
}

export default Lifecycle;
