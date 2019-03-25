import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { getUpdatedBooks } from './utils';

class ListBooks extends Component {
	static propTypes = {
		filterBooks: PropTypes.array,
		query: PropTypes.string,
	};
	state = {
		query: '',
		filterBooks: [],
	};

	updateShelf = (updatedBook, toShelf) => {
		const updatedBooks = getUpdatedBooks(updatedBook, this.props.myBooks, toShelf);
		this.props.updateBooks(updatedBooks);
	};

	updateQuery = event => {
		const query = event.target.value;
		if (query.length > 0) {
			BooksAPI.search(query).then(filterBooks => {
				if (!!filterBooks && filterBooks.length > 0) {
					const result = filterBooks.map(filterBook => {
						const bookMatch = this.props.myBooks.find(myBook => myBook.id === filterBook.id);
						if (!bookMatch) {
							return filterBook;
						} else {
							return {
								...filterBook,
								shelf: bookMatch.shelf,
							};
						}
					});
					this.setState({
						filterBooks: result,
					});
				} else {
					this.setState({
						filterBooks: [],
					});
				}
			});
		} else {
			this.setState({
				filterBooks: [],
			});
		}
		this.setState(() => ({
			query: query,
		}));
	};

	render() {
		const { query, filterBooks } = this.state;
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search">Close</button>
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={this.updateQuery}
						/>
						{filterBooks.length > 0 ? (
							<div className="search-books-results">
								<ol className="books-grid">
									{filterBooks.map(filterBook => (
										<Book key={filterBook.id} book={filterBook} updateShelf={this.updateShelf} />
									))}
								</ol>
							</div>
						) : (
							query.length > 0 && <h4>No results found. Please enter a new search term</h4>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default ListBooks;
