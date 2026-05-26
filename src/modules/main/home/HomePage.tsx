import React from "react";
import Banner from "./Banner/Banner";
import HowItWorkes from "./HowItWorkes/HowItWorkes";
import FeaturedRfqs from "./FeaturedRfqs/FeaturedRfqs";
import { ManufacturingExcellence } from "./ManufacturingExcellence/ManufacturingExcellence";
import VerifiedSuppliers from "./VerifiedSuppliers/VerifiedSuppliers";

const HomePage = () => {
  return (
    <div>
      <Banner />
       <HowItWorkes />
        <FeaturedRfqs />
        <ManufacturingExcellence /> 
         <VerifiedSuppliers/>
    </div>
  );
};

export default HomePage;
