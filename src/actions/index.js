export function selectBook(book) {
  // ActionCreator needs to return an action
  // - Always returns a type
  // - Sometimes returns a payload (data about action description)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
