import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Productcard from "../Components/Productcard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  description: "This is a test product",
  price: 99.99,
  thumbnail: "https://via.placeholder.com/150",
};

const mockOnDelete = jest.fn();

const setup = () => {
  render(<Productcard product={mockProduct} onDelete={mockOnDelete} />);
};

test("renders product title", () => {
  setup();
  expect(screen.getByText("Test Product")).toBeInTheDocument();
});

test("renders product description", () => {
  setup();
  expect(screen.getByText("This is a test product")).toBeInTheDocument();
});

test("renders product price", () => {
  setup();
  expect(screen.getByText("$99.99")).toBeInTheDocument();
});

test("renders product image with correct src and alt", () => {
  setup();
  const image = screen.getByAltText("Test Product");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockProduct.thumbnail);
});

test("calls onDelete when delete button is clicked", () => {
  setup();
  const deleteButton = screen.getByRole("button", { name: /delete/i });
  fireEvent.click(deleteButton);
  expect(mockOnDelete).toHaveBeenCalledWith(1);
});
