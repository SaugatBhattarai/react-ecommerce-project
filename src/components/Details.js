import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {
              id,
              title,
              img,
              price,
              company,
              info,
              inCart
            } = value.detailProduct;
            // console.log("value ......", value);
            return (
              <div className="container py-5">
                {/* {title} */}
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
                {/* {end title} */}
                {/* {Product Info} */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  {/* {Product Text} */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Some info about Product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* {Buttons} */}
                    <div>
                      <Link to="/">
                        <ButtonContainer>Back to Products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to Cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
