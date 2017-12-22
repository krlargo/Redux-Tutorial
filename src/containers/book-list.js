import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // Makes sure action flows through all reducers in application

class BookList extends Component {

  renderList() {
    // For each book in 'books' array, create an <li>
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
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

// Maps state to props of container
// - Whatever is returned will show up as props inside of BookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Makes actionCreators available to the container
// - Whatever is returned will show up as props inside of BookList
function mapDispatchToProps(dispatch) {
  // When selectBook is called, result is passed to all reducers
  // - (flows through dispatch, dispatch passes onto all reducers)
  // selectBook is our actionCreator
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// - Whenever we make a container file, we want to export the container (i.e. not just BookList)
//   - connect() takes a function and a component to produce a container;
//     - whatever the function returns becomes the component's props
// - Whenever state changes, container automatically re-renders
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
