import * as C from "./style";
import iconPlus from "../../assets/images/main/icon-plus.svg";
import iconMinus from "../../assets/images/main/icon-minus.svg";
import { BsCart3 } from "react-icons/bs";

export const MainProductDescription = () => {
  return (
    <C.MainProductDescription>
      <h2 className="product-description__subtitle">SNEAKER COMPANY </h2>
      <h1 className="product-description__title">Fall Limited Sneakers</h1>
      <p className="product-description__features">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      {/* //product pricing div */}
      <div className="product-pricing__main">
        <div className="product-pricing__currPrice">
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <p>$250.00</p>
      </div>
      {/* //product quantity div */}
      <div>
        {/* //product quanity */}
        <div>
          <button
          //   onClick={}
          >
            <img src={iconMinus} />
          </button>
          <span>0</span>
          <button
          //   onClick={}
          >
            <img src={iconPlus} />
          </button>
        </div>
        {/* //orange button , create own button for this in global styles */}
        <button>
          <BsCart3 />
          <p>Add to cart</p>
        </button>
      </div>
    </C.MainProductDescription>
  );
};
