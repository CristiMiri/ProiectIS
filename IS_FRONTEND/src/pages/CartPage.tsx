import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductTable from "../components/ProductTable";
import CartPanel from "../components/CartPanel";
import { Product } from "../models/product";
import { cartItemsDummy } from "../models/dummys";
// Dummy data for the cart items
const initialCartItems: Product[] = [
  // Populate with actual cart items
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>(initialCartItems);

  useEffect(() => {
    // Fetch cart items from a state management store or API call
    setCartItems(cartItemsDummy);
  }, []);

  const handleCheckout = () => {
    // Implement checkout logic
    console.log("Order placed");
  };

  const handleCancel = () => {
    // Implement cancel logic
    console.log("Order canceled");
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h1>Shopping Cart</h1>
          <ProductTable products={cartItems} />
        </Col>
        <Col xs={12} md={4}>
          <CartPanel
            products={cartItems}
            onCheckout={handleCheckout}
            onCancel={handleCancel}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
