import React, { Component } from "react";
import Box from "@mui/material/Box";
import Productcard from "./Productcard";
import PaginationComponents from "./Pagination";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentPage: 1,
      productsPerPage: 6,
   
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data.products }));
  }

  handleDelete = (id) => {
    this.setState((prevState) => {
      const updatedProducts = prevState.products.filter((product) => product.id !== id);
      //  const totalPages = Math.ceil(updatedProducts.length / prevState.productsPerPage);           //29/6=4.5=5
      let newPage = prevState.currentPage;
      
      if (updatedProducts.length % prevState.productsPerPage === 0) {
        newPage = Math.max(1, prevState.currentPage - 1);
      }

      return {
        products: updatedProducts,
        currentPage: newPage,
      };
    });
  };

  handlePageChange = (event, value) => {
    this.setState({ currentPage: value });
  };

  render() {
    const { products, currentPage, productsPerPage } = this.state;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
      <div>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", padding: 2 }}>
        {currentProducts.map((product) => (
          <Productcard key={product.id} product={product} onDelete={this.handleDelete} />
        ))}
        
        </Box>
     
      <PaginationComponents
          totalproducts={products.length}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          handlePageChange={this.handlePageChange}
        />
       </div>
    );
  }
}

export default ProductList;
