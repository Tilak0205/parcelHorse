import React, { useState } from "react";
import { Button, Input, Select, Option, Typography } from "@/components/ui"; // Make sure this import path is correct

const ShippingForm = () => {
  const [parcels, setParcels] = useState([{ id: 1 }]);

  // Function to add another parcel
  const addParcel = () => {
    setParcels([...parcels, { id: parcels.length + 1 }]);
  };

  // Function to clear the form
  const clearForm = () => {
    setParcels([{ id: 1 }]);
  };

  const weightUnits = ["kg", "lbs", "g"];
  const lengthUnits = ["cm", "in", "mm"];
  const countries = ["United States", "Canada", "United Kingdom", "Australia", "India"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <Typography variant="h3" color="gray-900" className="mb-4 font-bold text-center">
        Quick Enquiry
      </Typography>

      <form className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-4">
          {/* From Section */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Sending From
            </Typography>
            <div className="flex gap-2 mb-4">
              <Select variant="outlined" size="lg" className="w-full">
                {countries.map((country) => (
                  <Option key={country}>{country}</Option>
                ))}
              </Select>
              <Input variant="outlined" size="lg" placeholder="Postal Code" className="w-full" />
            </div>

            <Typography variant="small" className="mb-2 font-medium">
              Weight
            </Typography>
            <div className="flex gap-2 mb-4">
              <Input variant="outlined" size="lg" className="w-full" placeholder="Weight" />
              <Select variant="outlined" size="lg" className="w-full">
                {weightUnits.map((unit) => (
                  <Option key={unit}>{unit}</Option>
                ))}
              </Select>
            </div>

            <Typography variant="small" className="mb-2 font-medium">
              Width
            </Typography>
            <div className="flex gap-2 mb-4">
              <Input variant="outlined" size="lg" className="w-full" placeholder="Width" />
              <Select variant="outlined" size="lg" className="w-full">
                {lengthUnits.map((unit) => (
                  <Option key={unit}>{unit}</Option>
                ))}
              </Select>
            </div>
          </div>

          {/* To Section */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Sending To
            </Typography>
            <div className="flex gap-2 mb-4">
              <Select variant="outlined" size="lg" className="w-full">
                {countries.map((country) => (
                  <Option key={country}>{country}</Option>
                ))}
              </Select>
              <Input variant="outlined" size="lg" placeholder="Postal Code" className="w-full" />
            </div>

            <Typography variant="small" className="mb-2 font-medium">
              Height
            </Typography>
            <div className="flex gap-2 mb-4">
              <Input variant="outlined" size="lg" className="w-full" placeholder="Height" />
              <Select variant="outlined" size="lg" className="w-full">
                {lengthUnits.map((unit) => (
                  <Option key={unit}>{unit}</Option>
                ))}
              </Select>
            </div>

            <Typography variant="small" className="mb-2 font-medium">
              Length
            </Typography>
            <div className="flex gap-2 mb-4">
              <Input variant="outlined" size="lg" className="w-full" placeholder="Length" />
              <Select variant="outlined" size="lg" className="w-full">
                {lengthUnits.map((unit) => (
                  <Option key={unit}>{unit}</Option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        {/* Parcels Section */}
        {parcels.map((parcel, index) => (
          <div key={parcel.id} className="grid grid-cols-4 gap-2 mb-4">
            <Input variant="outlined" size="lg" placeholder={`Weight (Parcel ${index + 1})`} className="w-full" />
            <Input variant="outlined" size="lg" placeholder={`Height (Parcel ${index + 1})`} className="w-full" />
            <Input variant="outlined" size="lg" placeholder={`Width (Parcel ${index + 1})`} className="w-full" />
            <Input variant="outlined" size="lg" placeholder={`Length (Parcel ${index + 1})`} className="w-full" />
          </div>
        ))}

        {/* Buttons Section */}
        <Button variant="outlined" size="lg" className="mb-4 w-full" onClick={addParcel}>
          Add Another Parcel
        </Button>

        <div className="flex gap-4">
          <Button variant="outlined" size="lg" className="w-full" onClick={clearForm}>
            Clear Form
          </Button>
          <Button variant="gradient" size="lg" className="w-full">
            Get a Quote
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
