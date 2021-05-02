import React, { Component } from "react";

class SearchProduct extends Component {
  constructor() {
    super();
    this.state = {
      sdata: "",
      ind: undefined,
    };
  }
  searchproduct = (s) => {
    console.log(s);
    // this.props.searchprod(s);
    // this.setState({
    //   sdata: s,
    // });
  };

  editserach = (event) => {
    this.setState({
      sdata: event.target.value,
    });
  };
  render() {
    const header = (
      <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Product Price</th>
        {/* <th>Action</th> */}
        {/* <th>Display</th> */}
      </tr>
    );
    const print = this.props.mydata.map((i) => (
      <tr>
        <td>{i.prodId}</td>
        <td>{i.prodName}</td>
        <td>{i.prodPrice}</td>
      </tr>
    ));

    return (
      <div>
        <table align="center">
          <tr>
            <td>Search</td>
            <td>
              <input
                type="text"
                value={this.state.sdata}
                onChange={this.editserach}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Select</td>
            <td>
              <input type="radio" name="select"></input>ID
            </td>
            <td>
              <input type="radio" name="select"></input>Name
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.searchproduct(this.state.sdata)}>
                Find
              </button>
            </td>
          </tr>
        </table>
        <table align="center" border="1">
          {header}
          {print[this.state.ind]}
        </table>
      </div>
    );
  }
}

export default SearchProduct;
