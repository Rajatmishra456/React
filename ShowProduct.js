import React, { Component } from "react";

class ShowProduct extends Component {
  // constructor() {
  //   super();
  //   // this.showproduct = this.showproduct.bind(this);
  // const img0 =
  //    "https://img.etimg.com/thumb/width-640,height-480,imgsize-263761,resizemode-1,msid-74742498/news/economy/agriculture/rice-export-from-india-to-ride-rabi-harvest-global-price/rice-agencies.jpg";
  // const img1 =
  //    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000";
  //  const img2 =
  //   "data:image/jpeg;base64,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";
  //   this.state = {
  //     products: [
  //       { prodId: 1001, prodName: "Rice", prodPrice: 40 },
  //       { prodId: 1002, prodName: "iphone", prodPrice: 100000 },
  //       { prodId: 1003, prodName: "Shirt", prodPrice: 2500 },
  //     ],
  //     // imglist: [img0, img1, img2],
  //     // indi: undefined,
  //   };
  // }
  deleteproduct = (a) => {
    // this.state.products.splice(a, 1);
    // this.setState({
    //   products: this.state.products,
    // });

    this.props.calldeleteproduct(a);
  };
  // showproduct = (b) => {
  //   this.setState({
  //     indi: b,
  //   });
  // };
  render() {
    const header = (
      <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Action</th>
        {/* <th>Display</th> */}
      </tr>
    );
    const print = this.props.mydata.map((i, index) => (
      <tr>
        <td>{i.prodId}</td>
        <td>{i.prodName}</td>
        <td>{i.prodPrice}</td>
        <td>
          <button onClick={() => this.deleteproduct(index)}>DELETE</button>
        </td>
        {/* <td>
          <button onClick={() => this.showproduct(index)}>SHOW</button>
        </td> */}
      </tr>
    ));
    return (
      <div>
        <h3>Showing Product</h3>
        <table align="center" border="1">
          {header}
          {print}
        </table>
        {/* <div>
          <img
            src={this.state.imglist[this.state.indi]}
            alt="Image"
            width="350px"
            height="400px"
          />
          ;
        </div> */}
      </div>
    );
  }
}

export default ShowProduct;
