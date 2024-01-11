import * as C from "./style";
import { useState } from "react";
import { ProductImages } from "../../modules/data/ProductImages";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setActiveImage } from "../../feature/selectActiveImage";
import "../../assets/GlobalStyles/animation.css";

export const MainProductImage = () => {
  const ProductImageList = ProductImages;
  const [productImageList] = useState(ProductImageList);

  const selectActiveImage = useAppSelector(
    (state) => state.activeImage.activeImage
  );

  console.log({ selectActiveImage });

  const dispatch = useAppDispatch();

  const handleActiveImage = (imageid: number) => {
    dispatch(setActiveImage(imageid));
  };

  const handleToggleModal = () => {};

  return (
    <C.MainProductImage>
      <figure className="product-image__large">
        {productImageList.map(({ id, productImage }) => {
          return (
            <img
              key={id}
              src={productImage}
              alt="product-image"
              onClick={handleToggleModal}
              className={`${
                selectActiveImage === id
                  ? "fadeIn displayBlock"
                  : "fadeOut displayNone"
              }`}
            />
          );
        })}
      </figure>

      <figure className="product-image__small">
        {productImageList.map(({ id, productThumbnailImage }) => {
          return (
            <div
              key={id}
              onClick={() => handleActiveImage(id)}
              className={`${selectActiveImage === id ? "active" : ""}`}
            >
              <img src={productThumbnailImage} alt="product-thumbnail-image" />
            </div>
          );
        })}
      </figure>
    </C.MainProductImage>
  );
};
