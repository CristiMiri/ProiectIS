// ProductForm.tsx
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Product, ProductCategory } from "../../models/product";

interface ProductFormProps {
  product: Product;
  onSave: (product: Product) => void; // Function to save the product
  productcategories: ProductCategory[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSave,
  productcategories,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]:
        name === "price" || name === "quantity" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(updatedProduct);
  };

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={updatedProduct.quantity}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={updatedProduct.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={updatedProduct.category?.name}
            onChange={(e) => {
              const category = productcategories.find(
                (c) => c.name === e.currentTarget.value
              );
            }}
          >
            <option value="">Select a category</option>
            {Object.values(productcategories).map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Product
        </Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
