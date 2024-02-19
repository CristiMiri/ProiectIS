import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Product } from "../models/product";
import { getAllProducts } from "../api/ProductService";
import { addtoCart } from "../api/UserService";

interface ProductLayoutProps {
  prods: Product[];
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ prods }) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    // getAllProducts().then((data) => {
    //   setProducts(data);
    // });
    setProducts(prods);
  }, []);

  const addtoCart = (product: Product) => {
    console.log(product);
    localStorage.setItem("cart", JSON.stringify(product));
  };

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={product} addToCart={addtoCart} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductLayout;
