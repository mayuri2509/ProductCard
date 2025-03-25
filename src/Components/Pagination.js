import React from "react";
import { Pagination } from "@mui/material";

class PaginationComponents extends React.Component {
  render() {
    const { totalproducts, productsPerPage, handlePageChange, currentPage } = this.props;

    return (
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={Math.ceil(totalproducts / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="error"
        />
      </div>
    );
  }
}

export default PaginationComponents;
