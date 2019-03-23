import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	state = {
		books: [],
		shelves: [
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
		],
	};
	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({
				books,
			});
		});
	}

	updateShelf = (updatedBook, toShelf, fromShelf) => {
		const updatedBooks = this.state.books.map(book => {
			if (book.shelf === fromShelf && updatedBook.id === book.id) {
				return { ...book, shelf: toShelf };
			} else {
				return { ...book };
			}
		});
		this.setState(() => ({
			books: updatedBooks,
		}));
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
							{this.state.shelves.map(shelf => (
								<BookShelf
									key={shelf.key}
									shelf={shelf}
									books={this.state.books}
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
