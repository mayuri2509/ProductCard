// PaginationComponents.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PaginationComponents from "../Components/Pagination"; // Adjust path if needed

test("renders Pagination with correct page count", () => {
  const handlePageChange = jest.fn();
  render(
    <PaginationComponents
      totalproducts={18}
      productsPerPage={6}
      currentPage={1}
      handlePageChange={handlePageChange}
    />
  );

  // Total pages = 18 / 6 = 3
  const pagination = screen.getByRole("navigation", { name: /pagination navigation/i });
  expect(pagination).toBeInTheDocument();
});

test("calls handlePageChange on page click", () => {
  const handlePageChange = jest.fn();
  render(
    <PaginationComponents
      totalproducts={18}
      productsPerPage={6}
      currentPage={1}
      handlePageChange={handlePageChange}
    />
  );

  const page2 = screen.getByRole("button", { name: "Go to page 2" });
  fireEvent.click(page2);
  expect(handlePageChange).toHaveBeenCalled();

});
