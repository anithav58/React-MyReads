import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class ListBooks extends Component {
	state = {
		query: '',
		filterBooks: [],
	};
	// componentDidMount() {
	// 	BooksAPI.search(this.state.query).then(filterBooks => {
	// 		this.setState({
	// 			filterBooks,
	// 		});
	// 	});
	// }
	updateQuery = query => {
		BooksAPI.search(query).then(filterBooks => {
			this.setState({
				filterBooks,
			});
		});
		this.setState(() => ({
			query: query.trim(),
		}));
	};
	clearQuery = () => {
		this.updateQuery('');
	};

	render() {
		const { query, filterBooks } = this.state;
		//const { books } = this.props;

		// const filterBooks =
		// 	query === '' ? books : books.filter(b => b.title.toLowerCase().includes(query.toLowerCase()));
		console.log('FilteredBooks', filterBooks);
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search" onClick={this.clearQuery}>
							Close
						</button>
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={event => this.updateQuery(event.target.value)}
						/>
						{!!filterBooks && filterBooks.length > 0 ? (
							<div className="search-books-results">
								<ol className="books-grid">
									{filterBooks.map(filterBook => (
										<Book key={filterBook.id} book={filterBook} />
									))}
								</ol>
							</div>
						) : (
							<h2>No results found. Please enter a new search term</h2>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default ListBooks;
