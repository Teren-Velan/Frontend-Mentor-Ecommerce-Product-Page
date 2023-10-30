import * as C from "./style";
import IconMenu from "../../assets/header/icon-menu.svg";
import Logo from "../../assets/header/logo.svg";
import CloseIcon from "../../assets/header/icon-close.svg";
import { NavbarCategoriesList } from "../../modules/Header/constant";

export const HeaderMenu: React.FC = () => {
  return (
    <C.HeaderMenu>
      <button>
        <img src={IconMenu} alt="menu-icon" />
      </button>
      <a className="HeaderMenu__logo" href="">
        <img src={Logo} alt="logo" />
      </a>

      <nav>
        <div className="container flex-nav">
          <button className="HeaderMenu__closeIcon">
            <img src={CloseIcon} alt="menu-icon" />
          </button>
          <div className="HeaderMenu_navList">
            {NavbarCategoriesList.map(({ id, category }) => {
              return <h2 key={id}>{category}</h2>;
            })}
          </div>
        </div>
      </nav>
    </C.HeaderMenu>
  );
};
