import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Product } from "../models/product";

interface CartPanelProps {
  products: Product[];
  onCheckout: () => void;
  onCancel: () => void;
}

const CartPanel: React.FC<CartPanelProps> = ({
  products,
  onCheckout,
  onCancel,
}) => {
  const totalCost = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <Card className="bg-light mt-5">
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <Card.Text>
          <strong>Total Cost:</strong> ${totalCost.toFixed(2)}
        </Card.Text>
        <Form>
          <Form.Group controlId="paymentMethod">
            <Form.Label>Select Payment Method</Form.Label>
            <Form.Control as="select">
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <div className="d-grid gap-2">
          <Button variant="success" onClick={onCheckout} className="mt-3">
            Place Order
          </Button>
          <Button variant="danger" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartPanel;
