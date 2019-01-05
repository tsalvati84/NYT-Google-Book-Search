import React, { Component } from "react";
// import axios from "axios";

class Book extends Component {
  state = {
    books: this.props,
    imageUrl: ""
  };

  getWeeksOnList = () => {
    return this.state.books.weeksOnList === 1
      ? "NEW THIS WEEK"
      : this.state.books.weeksOnList + " WEEKS ON THE LIST";
  };

  findBookCover = async isbn => {
    const googleApiCall = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
        isbn +
        "&key=" +
        process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
    );

    const data = await googleApiCall.json();
    console.log("data", data);
    const dataItems = data.items;

   
  };

  render() {
    return (
      <li className="book">
        <p className="book-week">{this.getWeeksOnList()}</p>
        <p className="book-title">{this.state.books.bookTitle.toUpperCase()}</p>
        <p className="book-author">
          by {this.state.books.author} | {this.state.books.publisher}
        </p>
        <p className="book-description">{this.state.books.description}</p>
        {/* IMAGE:{" "}
        <img
          src="http://books.google.com/books/content?id=bPJUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt="google-book"
        /> */}
        {/* BOOK COVER:
        <img src={this.findBookCover()} alt="please-render" /> */}
      </li>
    );
  }
}

export default Book;