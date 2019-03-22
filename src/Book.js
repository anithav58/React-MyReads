import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
	render() {
		const { title, authors, imageLinks } = this.props.book;
		console.log(imageLinks);
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url(${imageLinks.smallThumbnail})`,
							}}
						/>
						<BookShelfChanger />
					</div>
					<div className="book-title">{title}</div>
					<div className="book-authors">{authors.join(', ')}</div>
				</div>
			</li>
		);
	}
}

export default Book;
