import { Routes, Route } from "react-router-dom";

import CatagoriesPreview from "../../components/catagories-preview/catagories-preview.component";
import "../catagory/catagory.component";
import Catagory from "../catagory/catagory.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CatagoriesPreview />} />
      <Route path=":catagory" element={<Catagory />} />
    </Routes>
  );
};

export default Shop;
