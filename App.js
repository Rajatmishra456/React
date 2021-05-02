import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./Component/AddProduct";
import ShowProduct from "./Component/ShowProduct";
import SearchProduct from "./Component/SearchProduct";
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { prodId: 1001, prodName: "Rice", prodPrice: 40 },
        { prodId: 1002, prodName: "iphone", prodPrice: 100000 },
        { prodId: 1003, prodName: "Shirt", prodPrice: 2500 },
      ],
    };
  }
  addData = (event) => {
    let addprod = this.state.products.push(event);
    this.setState({ addprod });
  };
  deleteData = (event) => {
    this.state.products.splice(event, 1);
    this.setState({
      products: this.state.products,
    });
  };

  searchdata = (event) => {
    this.state.products.filter((i) => i.prodId != event);
    // console.log(this.state.products);
    this.setState({ products: this.state.products });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome To React JS.....</h1>
          <Link to="/add">Add Products</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/show">Show Products</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/search">Search Products</Link>
          <Route path="/add">
            <AddProduct calladdproduct={this.addData}></AddProduct>
          </Route>
          <Route path="/show">
            <ShowProduct
              mydata={this.state.products}
              calldeleteproduct={this.deleteData}
            ></ShowProduct>
          </Route>
          <Route path="/search">
            <SearchProduct
              mydata={this.state.products}
              searchprod={this.searchdata}
            ></SearchProduct>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
