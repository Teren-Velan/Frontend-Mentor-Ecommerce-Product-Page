import * as C from "./style";
import IconMenu from "../../assets/header/icon-menu.svg";
import Logo from "../../assets/header/logo.svg";

export const HeaderMenu: React.FC = () => {
  return (
    <C.HeaderMenu>
      <button>
        <img src={IconMenu} alt="menu-icon" />
      </button>
      <a className="HeaderMenu__logo" href="">
        <img src={Logo} alt="logo" />
      </a>
    </C.HeaderMenu>
  );
};
