// ProductPage.tsx
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import { products } from "../models/dummys";
import ProductForm from "../components/Forms/ProductForm";
import { Product, ProductCategory } from "../models/product";
import { getAllCategories } from "../api/ProductService";
const ProductPage: React.FC = () => {
  const [productcategories, setProductCategories] = React.useState<
    ProductCategory[]
  >([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setProductCategories(data);
    });
  }, []);

  return (
    <Container>
      <ProductForm
        product={products[0]}
        productcategories={productcategories}
        onSave={(product: Product) => console.log(product)}
      />
    </Container>
  );
};

export default ProductPage;
