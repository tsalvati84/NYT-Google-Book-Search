import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import Form from "./components/form";
import BookList from "./components/bookList";

class App extends Component {
  state = {
    books: [],
    format: "" // book format i.e. hardcover-fiction
  };

  // NYT API call for best sellers list
  getBooks = async e => {
    // from form component
    let formSearch = e.target.elements.formSearch.value;
    e.preventDefault();
    e.target.reset();

    // clear state for next search
    this.setState({ books: [] });

    // make API request
    const nytApiCall = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists.json?list=" +
        formSearch + "&api-key=" + "893ff80ed7b54b818c6dd60f0810fe80"
    );

    const data = await nytApiCall.json();

    // setState with data
    this.setState({ books: data.results });

    // to clean up form search, should use regex
    if (formSearch === "hardcover-fiction") {
      formSearch = "Hardcover Fiction";
    }
    if (formSearch === "hardcover-nonfiction") {
      formSearch = "Hardcover Nonfiction";
    }
    if (formSearch === "combined-print-and-e-book-fiction") {
      formSearch = "Combined Print & E-Book Fiction";
    }
    if (formSearch === "combined-print-and-e-book-nonfiction") {
      formSearch = "Combined Print & E-Book Nonfiction";
    }
    if (formSearch === "paperback-nonfiction") {
      formSearch = "Paperback Nonfiction";
    }
    if (formSearch === "advice-how-to-and-miscellaneous") {
      formSearch = "Advice, How-To & Miscellaneous";
    }
    if (formSearch === "childrens-middle-grade-hardcover") {
      formSearch = "Children's Middle Grade Hardcover";
    }
    if (formSearch === "young-adult-hardcover") {
      formSearch = "Young Adult Hardcover";
    }

    this.setState({ format: formSearch });
    console.log("this.state.books", this.state.books);
    console.log("format", this.state.format);
  };

  render() {
    return (
      <div className="container">
        <Nav />
        <Form getBooks={this.getBooks} />
        <Header format={this.state.format} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;