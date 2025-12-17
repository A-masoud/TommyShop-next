import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ColorAndQuantitySelector } from "@/components/ProductDetail/ColorAndQuantitySelector";

function QuantityTestWrapper() {
  const [quantity, setQuantity] = useState(1);

  return (
    <ColorAndQuantitySelector
      colors={["red"]}
      selectedColor="red"
      setSelectedColor={() => {}}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  );
}

describe("Quantity behavior", () => {
  test("shows initial quantity", () => {
    render(<QuantityTestWrapper />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("increases quantity when + is clicked", () => {
    render(<QuantityTestWrapper />);

    const increaseBtn = screen.getByLabelText("increase quantity");
    fireEvent.click(increaseBtn);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("decreases quantity when - is clicked", () => {
    render(<QuantityTestWrapper />);

    const increaseBtn = screen.getByLabelText("increase quantity");
    const decreaseBtn = screen.getByLabelText("decrease quantity");

    fireEvent.click(increaseBtn); // 2
    fireEvent.click(decreaseBtn); // back to 1

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("quantity should not go below 1", () => {
    render(<QuantityTestWrapper />);

    const decreaseBtn = screen.getByLabelText("decrease quantity");
    fireEvent.click(decreaseBtn);
    fireEvent.click(decreaseBtn);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
