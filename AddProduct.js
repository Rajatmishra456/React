import React, { Component } from "react";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      prodID: "",
      prodName: "",
      prodPrice: "",
    };
  }
  addProduct = (event) => {
    //   alert(
    //     "Product Id is" +
    //       this.state.prodId +
    //       ". Product Name is " +
    //       this.state.prodName +
    //       ". Product Price is " +
    //       this.state.prodPrice +
    //       "."
    //   );
    this.props.calladdproduct(this.state);
  };

  prodIDChange = (event) => {
    this.setState({
      prodId: event.target.value,
    });
  };
  prodNameChange = (event) => {
    this.setState({
      prodName: event.target.value,
    });
  };
  prodPriceChange = (event) => {
    this.setState({
      prodPrice: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Add Product.</h1>
        <table align="center" border="1">
          <tr>
            <td> Product Id</td>
            <td>
              <input
                type="text"
                value={this.state.prodId}
                onChange={this.prodIDChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td> Product Name</td>
            <td>
              {" "}
              <input
                type="text"
                value={this.state.prodName}
                onChange={this.prodNameChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td> Product Price</td>
            <td>
              {" "}
              <input
                type="text"
                value={this.state.prodPrice}
                onChange={this.prodPriceChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.addProduct}>Add product</button>
            </td>
          </tr>
        </table>
        {/* Product ID is : {this.state.prodID}
        <br />
        Product Name is: {this.state.prodName}
        <br />
        Product Price is: {this.state.prodPrice} <br /> */}
      </div>
    );
  }
}
export default AddProduct;
