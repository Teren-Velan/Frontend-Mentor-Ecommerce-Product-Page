import * as C from "./style";
import IconCart from "../../assets/header/icon-cart.svg";
import IconAvatar from "../../assets/header/image-avatar.png";

export const HeaderUser: React.FC = () => {
  return (
    <C.HeaderUser>
      <button>
        <img src={IconCart} alt="cart-icon" />
      </button>

      <div className="HeaderUser__avatar">
        <img src={IconAvatar} alt="user-avatar" />
      </div>
    </C.HeaderUser>
  );
};
