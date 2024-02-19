import React from "react";
import Table from "react-bootstrap/Table";
import { Product } from "../models/product";

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.quantity}</td>
            <td>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </td>
            <td>{product.category?.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
