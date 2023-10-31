import * as C from "./style";
import { useState } from "react";
import IconMenu from "../../assets/header/icon-menu.svg";
import Logo from "../../assets/header/logo.svg";
import CloseIcon from "../../assets/header/icon-close.svg";
import { NavbarCategoriesList } from "../../modules/Header/constant";

export const HeaderMenu: React.FC = () => {
  const [active, setActive] = useState(true);

  const handleOnNavbarOpen = () => {
    setActive(true);
  };

  const handleOnNavbarClose = () => {
    setActive(!active);
  };

  return (
    <C.HeaderMenu>
      <button
        onClick={() => {
          handleOnNavbarOpen();
        }}
      >
        <img src={IconMenu} alt="menu-icon" />
      </button>
      <a className="HeaderMenu__logo" href="">
        <img src={Logo} alt="logo" />
      </a>

      <nav>
        <div className={`HeaderMenu__NavContainer ${active ? "active" : ""}`}>
          <button
            className="HeaderMenu__closeIcon"
            onClick={() => {
              handleOnNavbarClose();
            }}
          >
            <img src={CloseIcon} alt="menu-icon" />
          </button>
          <div className="HeaderMenu_nav">
            <div className="HeaderMenu_navList">
              {NavbarCategoriesList.map(({ id, category }) => {
                return (
                  <a key={id} href="">
                    {category}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </C.HeaderMenu>
  );
};
