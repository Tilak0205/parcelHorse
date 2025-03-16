import React from "react";
import ShippingForm from "./ShippingForm"; // Adjust the import path based on your file structure

const ParentComponent = () => {
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">Shipping Form</h1>
      <ShippingForm /> {/* This will render the ShippingForm */}
    </div>
  );
};

export default ParentComponent;
