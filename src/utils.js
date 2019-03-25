export const getUpdatedBooks = (updatedBook, books, toShelf) => {
	const isBookInMyDashboard = books.find(book => book.id === updatedBook.id);
	if (isBookInMyDashboard) {
		return books.map(book => {
			if (updatedBook.id === book.id) {
				return { ...book, shelf: toShelf };
			} else {
				return { ...book };
			}
		});
	} else {
		return [...books, { ...updatedBook, shelf: toShelf }];
	}
};
