import {
  CatagoryPreviewContainer,
  Title,
  Preview,
} from "./catagory-preview.styles";
import ProductCard from "../product-card/product-card.componet";
const CatagoryPreview = ({ title, products }) => {
  return (
    <CatagoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CatagoryPreviewContainer>
  );
};

export default CatagoryPreview;
