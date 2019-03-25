import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

const Book = props => {
	const handleChange = shelf => {
		const { book, updateShelf } = props;
		BooksAPI.update(book, shelf).then(() => {
			!!updateShelf && updateShelf(book, shelf);
		});
	};

	const { title, authors, imageLinks, shelf } = props.book;
	const checkImageLinks = !!imageLinks ? imageLinks.smallThumbnail : '';

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${checkImageLinks})`,
						}}
					/>
					<BookShelfChanger shelf={shelf} handleChange={handleChange} />
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{!!authors ? authors.join(', ') : ''}</div>
			</div>
		</li>
	);
};

Book.propTypes = {
	book: PropTypes.object,
	updateShelf: PropTypes.func,
};

export default Book;
