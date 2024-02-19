import React from "react";
import FilterToolbar from "../components/FilterToolbar";
import ProductLayout from "../components/ProductLayout";

import { products } from "../models/dummys";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <FilterToolbar onSearch={() => {}} onFilter={() => {}} />
      <ProductLayout prods={products} />
    </div>
  );
};

export default HomePage;
