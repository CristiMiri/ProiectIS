import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  Container,
  Card,
} from "react-bootstrap";
import { ProductCategory } from "../models/product"; // Adjust the import path as needed
import { productCategories } from "../models/dummys";

interface FilterToolbarProps {
  onSearch: (searchTerm: string) => void;
  onFilter: (category: string) => void;
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({
  onSearch,
  onFilter,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Container className="my-4">
      <Card className="p-3" style={{ backgroundColor: "#e7f4ff" }}>
        <Row className="align-items-center justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSearchSubmit}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Button variant="outline-secondary" type="submit">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col md={4}>
            <Form.Select
              aria-label="Filter by category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Filter by category</option>
              {productCategories.map((category: ProductCategory) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default FilterToolbar;
