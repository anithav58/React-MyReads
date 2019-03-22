import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import ListBooks from './ListBooks';

class BooksApp extends Component {
	// state = {
	/**
	 * TODO: Instead of using this state variable to keep track of which page
	 * we're on, use the URL in the browser's address bar. This will ensure that
	 * users can use the browser's back and forward buttons to navigate between
	 * pages, as well as provide a good URL they can bookmark and share.
	 */
	//showSearchPage: false,
	// 	books: [],
	// };

	render() {
		return (
			<div className="app">
				<Route exact path="/" component={Dashboard} />
				<Route path="/search" render={({ history }) => <ListBooks />} />
				{/* <div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							
									
						</div>
					</div>
					<div className="open-search">
						<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
					</div>
				</div> */}
				)}
			</div>
		);
	}
}

export default BooksApp;
