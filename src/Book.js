import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
	handleChange = shelf => {
		BooksAPI.update(this.props.book, shelf).then(() => {
			!!this.props.updateShelf && this.props.updateShelf(this.props.book, shelf);
		});
	};
	render() {
		const { id, title, authors, imageLinks } = this.props.book;
		const checkImageLinks = !!imageLinks ? imageLinks.smallThumbnail : '';
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url(${checkImageLinks})`,
							}}
						/>
						<BookShelfChanger handleChange={this.handleChange} />
					</div>
					<div className="book-title">{title}</div>
					<div className="book-authors">{!!authors ? authors.join(', ') : ''}</div>
				</div>
			</li>
		);
	}
}

export default Book;
