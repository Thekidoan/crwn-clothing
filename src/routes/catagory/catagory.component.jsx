import { useContext, useState, useEffect, Fragment } from "react";
import { CatagoryContainer, CatagoryTitle } from "./catagory.styles";
import { CatagoriesContext } from "../../contexts/catagories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.componet";

const Catagory = () => {
  const { catagory } = useParams();
  const { catagoriesMap } = useContext(CatagoriesContext);
  const [products, setproducts] = useState(catagoriesMap[catagory]);

  useEffect(() => {
    setproducts(catagoriesMap[catagory]);
  }, [catagory, catagoriesMap]);
  return (
    <Fragment>
      <CatagoryTitle>{catagory.toUpperCase()}</CatagoryTitle>
      <CatagoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CatagoryContainer>
    </Fragment>
  );
};

export default Catagory;
