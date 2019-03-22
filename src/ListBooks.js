import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
	state = {
		query: '',
	};
	render() {
		const query = this.state;
		const { books } = this.props;
		const filterBooks =
			query === '' ? books : books.filter(b => b.title.toLowerCase().includes(query.toLowerCase()));

		return <div />;
	}
}
{
	/* <div className="search-books">
<div className="search-books-bar">
    <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
        Close
    </button>
    <div className="search-books-input-wrapper">
        {}
        <input type="text" placeholder="Search by title or author" />
    </div>
</div>
<div className="search-books-results">
    <ol className="books-grid" />
</div>
</div> */
}

export default ListBooks;
