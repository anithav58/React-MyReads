import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
	render() {
		const { shelf, books } = this.props;

		let filterBooks = books.filter(book => book.shelf === shelf.key);
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelf.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{filterBooks.map(filterBook => (
							<Book key={filterBook.title} book={filterBook} />
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default BookShelf;
