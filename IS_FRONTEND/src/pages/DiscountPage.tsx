import React from "react";
import DiscountForm from "../components/Forms/DiscountForm";
import { Discount } from "../models/discount";
import { createDiscount, deleteDiscount } from "../api/DiscountService";

type Props = {};

const DiscountPage = (props: Props) => {
  const [discount, setDiscount] = React.useState<Discount>({
    id: 0,
    code: "",
    percentage: 0,
    status: false,
    expiryDate: "",
  });

  const handleSave = (discount: Discount) => {
    var newDiscount = { ...discount };
    setDiscount(newDiscount);
    createDiscount(newDiscount);
    console.log(newDiscount);
    console.log("Discount saved");

    // Implement your save logic here, e.g., making an API call.
  };

  const handleDelete = (discount: Discount) => {
    var newDiscount = { ...discount };
    setDiscount(newDiscount);
    deleteDiscount(newDiscount.id);
  };
  return (
    <div>
      <DiscountForm
        discount={discount}
        onSave={(discount: Discount) => handleSave(discount)}
        onDelete={(discount: Discount) => handleDelete(discount)}
      />
    </div>
  );
};

export default DiscountPage;
