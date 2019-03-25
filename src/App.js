import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';

class BooksApp extends Component {
	state = {
		books: [],
	};

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({
				books,
			});
		});
	}

	updateBooks = updatedBooks => {
		this.setState(() => ({
			books: updatedBooks,
		}));
	};

	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => <Dashboard books={this.state.books} updateBooks={this.updateBooks} />}
				/>
				<Route
					path="/search"
					render={({ history }) => <ListBooks myBooks={this.state.books} updateBooks={this.updateBooks} />}
				/>
			</div>
		);
	}
}

export default BooksApp;
