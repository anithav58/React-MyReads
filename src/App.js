import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class BooksApp extends Component {
	static propTypes = {
		books: PropTypes.array,
	};
	state = {
		books: [],
	};

	fetchAllBooks = () => {
		BooksAPI.getAll().then(books => {
			this.setState({
				books,
			});
		});
	};

	componentDidMount() {
		this.fetchAllBooks();
	}

	updateBooks = updatedBooks => {
		this.setState(() => ({
			books: updatedBooks,
		}));
	};

	fetchBooks = () => {
		this.fetchAllBooks();
	};

	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<Dashboard
							books={this.state.books}
							updateBooks={this.updateBooks}
							fetchBooks={this.fetchBooks}
						/>
					)}
				/>
				<Route path="/search" render={({ history }) => <ListBooks myBooks={this.state.books} />} />
			</div>
		);
	}
}

export default BooksApp;
