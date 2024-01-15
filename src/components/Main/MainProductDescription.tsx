import * as C from "./style";
import type { Dispatch, SetStateAction } from "react";
import iconPlus from "../../assets/images/main/icon-plus.svg";
import iconMinus from "../../assets/images/main/icon-minus.svg";
import { BsCart3 } from "react-icons/bs";

interface MainProductDescriptionPropsType {
  productQuantity: number;
  setProductQuantity: Dispatch<SetStateAction<number>>;
}

export const MainProductDescription = (
  props: MainProductDescriptionPropsType
) => {
  const { setProductQuantity, productQuantity } = props;

  const handleAddQuantity = () => {
    setProductQuantity((prevState: number) => {
      return prevState + 1;
    });
  };

  const handleMinusQuantity = () => {
    if (productQuantity !== 0) {
      setProductQuantity((prevState: number) => {
        return prevState - 1;
      });
    } else {
      setProductQuantity(0);
    }
  };

  return (
    <C.MainProductDescription>
      <h2 className="product-description__subtitle">SNEAKER COMPANY </h2>
      <h1 className="product-description__title">
        Fall Limited Edition Sneakers
      </h1>
      <p className="product-description__features">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-pricing__main">
        <div className="product-pricing__currPriceContainer">
          <p className="product-pricing__currPrice">$125.00</p>
          <p className="product-pricing__discountPercentage">50%</p>
        </div>
        <p className="product-pricing__oldPrice">$250.00</p>
      </div>
      <div className="product-quantity__main">
        <div className="product-quantity__counter">
          <button
            onClick={() => {
              handleMinusQuantity();
            }}
          >
            <img src={iconMinus} />
          </button>

          <span>{productQuantity}</span>
          <button
            onClick={() => {
              handleAddQuantity();
            }}
          >
            <img src={iconPlus} />
          </button>
        </div>
        <button>
          <div className="addtoCart__button">
            <BsCart3 />
            <p>Add to cart</p>
          </div>
        </button>
      </div>
    </C.MainProductDescription>
  );
};
