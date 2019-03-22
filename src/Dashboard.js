import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

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
								<BookShelf key={shelf.key} shelf={shelf} books={this.state.books} />
							))}
						</div>
					</div>
					<div className="open-search">
						<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
