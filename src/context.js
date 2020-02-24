import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
// Context object created with create Context comes with Provider and Consumer
// react Component
const ProductContext = React.createContext();
//const ProductProvider = ProductContext.provider;

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };

  // tester = () => {
  //   console.log("State Products: ", this.state.products[0].inCart);
  //   console.log("Data products: ", storeProducts[0].inCart);

  //   const tempProducts = [...this.state.products];
  //   tempProducts[0].inCart = true;

  //   this.setState(
  //     () => {
  //       return { products: tempProducts };
  //     },
  //     () => {
  //       console.log(
  //         "After Changes - State Products: ",
  //         this.state.products[0].inCart
  //       );
  //       console.log("After Changes - Data products: ", storeProducts[0].inCart);
  //     }
  //   );
  // };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {/* <button onClick={this.tester}>click me</button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
