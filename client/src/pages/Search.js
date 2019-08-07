import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, SearchBtn } from "../components/Form";

class Books extends Component {
    state = {
      title: "",
      author: "",
      description: "",
      image: "",
      link: "",
      bookResults: [],
    };
  
    loadBooks = () => {
      API.getBooks()
        .then(res =>
          this.setState({ books: res.data})
        )
        .catch(err => console.log(err));
    };
  
    deleteBook = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.author) {
        API.saveBook({
          title: this.state.title,
          author: this.state.author,
          description: this.state.description
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    };

    handleSearch = event => {
      event.preventDefault();
      API.searchBook(this.state.title)
        .then(res => {
          this.setState({ bookResults: res });
          console.log(this.state.bookResults);
        })
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-12"> 
              <Jumbotron>
                <h1>Search for Books</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                  <SearchBtn id="search-button"onClick={this.handleSearch}>Search</SearchBtn>
    
                    {this.state.bookResults.data ? (
                      this.state.bookResults.data.items.map(thing => (
                        <resItem>
                          <h6>{thing.volumeInfo.title} by {thing.volumeInfo.authors}</h6>
                          <FormBtn onClick={this.handleFormSubmit}>Save Book</FormBtn>
                        </resItem>
                      ))
                    ) : (<h6>Search results will go here..</h6>)}
              </form>
            </Col>
      </Row>
        </Container>
      );
    }
  }
  
  export default Books;