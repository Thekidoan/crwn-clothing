import { useContext, Fragment } from "react";
import { CatagoriesContext } from "../../contexts/catagories.context";

import CatagoryPreview from "../catagory-preview/catagory-preview.component";

const CatagoriesPreview = () => {
  const { catagoriesMap } = useContext(CatagoriesContext);
  return (
    /* object.keys allow you to take the key from the object you pass to it in array of strings like ['hats','jackets',..and so on] so the keys of our map is titles */
    <Fragment>
      {Object.keys(catagoriesMap).map((title) => {
        const products = catagoriesMap[title];
        return (
          <CatagoryPreview key={title} title={title} products={products} />
        );
      })}{" "}
    </Fragment>
  );
};
/*</div>
      <Fragment key={title}>
         <h2>{title}</h2>
          <div className="products-container">
            {catagoriesMap[title].map((product) => (
              /*here we pass the object keys that we need there valus which is the items
              <ProductCard key={product.id} product={product} />*/

export default CatagoriesPreview;
