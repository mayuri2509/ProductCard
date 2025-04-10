import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [
            {
              id: 1,
              title: "Test Product",
              description: "Sample description",
              price: 99.99,
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
  jest.restoreAllMocks();
});

test("renders product title in the App component", async () => {
  render(<App />);
  const titleElement = await screen.findByText(/test product/i);
  expect(titleElement).toBeInTheDocument();
});
