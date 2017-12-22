import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    // For each book in 'books' array, create an <li>
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// - Whenever we make a container file, we want to export the container (i.e. not just BookList)
//   - connect() takes a function and a component to produce a container;
//     - whatever the function returns becomes the component's props
// - Whenever state changes, container automatically re-renders
export default connect(mapStateToProps)(BookList);
