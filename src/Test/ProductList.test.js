import { render, screen, waitFor } from "@testing-library/react";
import ProductList from "../Components/ProductList"

jest.mock("../Components/Productcard", () => ({ product }) => (
    <div>{product.title}</div>
  ));
  
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [
            {
              id: 1,
              title: "Test Product",
              description: "A cool test product",
              price: 100,
              rating: 4.5,
              category: "electronics",
              thumbnail: "https://via.placeholder.com/150",
            },
          ],
        }),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("renders fetched products in ProductList", async () => {
  render(<ProductList />);
  
  const product = await screen.findByText(/test product/i);
  expect(product).toBeInTheDocument();
});
