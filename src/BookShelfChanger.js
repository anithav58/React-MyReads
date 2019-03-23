import React, { Component } from 'react';

class BookShelfChanger extends Component {
	// state = {
	// 	value: '',
	// };
	handleChange = value => {
		this.props.handleChange(value);
		// this.setState(() => ({
		// 	value: value.trim(),
		// }));
	};
	render() {
		// console.log('Selected Value', this.state.value);
		return (
			<div className="book-shelf-changer">
				<select onChange={event => this.handleChange(event.target.value)}>
					<option value="move">Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}

export default BookShelfChanger;
