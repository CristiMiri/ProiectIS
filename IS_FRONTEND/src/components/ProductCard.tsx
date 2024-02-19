import React from "react";
import { Card, Button } from "react-bootstrap";
import { Product } from "../models/product";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
}: ProductCardProps) => {
  return (
    <Card className="h-100 m-2 mt-2" border="light" bg="light">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        title={product.name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text
          className="flex-grow-1"
          style={{ overflowY: "hidden", height: "1rem" }}
        >
          {product.description}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </Card.Text>
        <Card.Text>
          <strong>Quantity:</strong> {product.quantity}
        </Card.Text>
        <Card.Text>
          <strong>Category:</strong> {product.category?.name || "N/A"}
        </Card.Text>
        <Button
          variant="primary"
          className="mt-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
