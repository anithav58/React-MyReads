import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
	moveBook = (book, toShelf) => {
		this.props.updateShelf(book, toShelf, this.props.shelf.key);
	};
	render() {
		const { shelf, books } = this.props;

		let filterBooks = books.filter(book => book.shelf === shelf.key);
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelf.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{filterBooks.map(filterBook => (
							<Book key={filterBook.id} book={filterBook} updateShelf={this.moveBook} />
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default BookShelf;
