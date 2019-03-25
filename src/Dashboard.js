import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import { getUpdatedBooks } from './utils';

const SHELVES = [
	{
		title: 'Current Reading',
		key: 'currentlyReading',
	},
	{
		title: 'Want To Read',
		key: 'wantToRead',
	},
	{
		title: 'Read',
		key: 'read',
	},
];

class Dashboard extends Component {
	updateShelf = (updatedBook, toShelf) => {
		const updatedBooks = getUpdatedBooks(updatedBook, this.props.books, toShelf);

		this.props.updateBooks(updatedBooks);
	};

	render() {
		return (
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							{SHELVES.map(shelf => (
								<BookShelf
									key={shelf.key}
									shelf={shelf}
									books={this.props.books}
									updateShelf={this.updateShelf}
								/>
							))}
						</div>
					</div>

					<div className="open-search">
						<Link to="/search">
							<button>Add a book</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
