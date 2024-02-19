import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Discount } from "../../models/discount";

interface DiscountFormProps {
  discount: Discount;
  onSave: (discount: Discount) => void; // Function to save the updated discount
  onDelete: (discount: Discount) => void; // Function to delete the discount
}

const DiscountForm: React.FC<DiscountFormProps> = ({
  discount,
  onSave,
  onDelete,
}) => {
  const [updatedDiscount, setUpdatedDiscount] = useState<Discount>(discount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedDiscount({
      ...updatedDiscount,
      [name]: name === "percentage" ? parseInt(value, 10) : value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setUpdatedDiscount({ ...updatedDiscount, [name]: checked });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(updatedDiscount);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} className="w-50 mt-5">
        <Form.Group as={Row} className="mb-3" controlId="formDiscountCode">
          <Form.Label column sm={4} className="text-end">
            Code
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              name="code"
              value={updatedDiscount.code}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formDiscountPercentage"
        >
          <Form.Label column sm={4} className="text-end">
            Percentage
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="number"
              name="percentage"
              value={updatedDiscount.percentage}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formDiscountExpiryDate"
        >
          <Form.Label column sm={4} className="text-end">
            Expiry Date
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="date"
              name="expiryDate"
              value={updatedDiscount.expiryDate}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDiscountStatus">
          <Col sm={{ span: 8, offset: 4 }}>
            <Form.Check
              type="checkbox"
              label="Active"
              name="status"
              checked={updatedDiscount.status}
              onChange={handleCheckboxChange}
            />
          </Col>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button type="submit">Save Changes</Button>
        </div>
        <div className="d-flex justify-content-center mt-3 ">
          <Button
            type="submit"
            variant="danger"
            onClick={() => onDelete(updatedDiscount)}
          >
            Delete Discount
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default DiscountForm;
