import * as C from "./style";
import { useState } from "react";
import IconMenu from "../../assets/header/icon-menu.svg";
import Logo from "../../assets/header/logo.svg";
import CloseIcon from "../../assets/header/icon-close.svg";
import { NavbarCategoriesList } from "../../modules/Header/constant";

export const HeaderMenu: React.FC = () => {
  const [navbarActive, setNavbarActive] = useState(true);

  const handleOnNavbarOpen = () => {
    setNavbarActive(true);
  };

  const handleOnNavbarClose = () => {
    setNavbarActive(!navbarActive);
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

      <nav className={`${navbarActive ? "HeaderMenu__nav" : ""}`}>
        <div
          className={`HeaderMenu__NavContainer ${navbarActive ? "active" : ""}`}
        >
          <button
            className="HeaderMenu__closeIcon"
            onClick={() => {
              handleOnNavbarClose();
            }}
          >
            <img src={CloseIcon} alt="menu-icon" />
          </button>
          <div className="HeaderMenu__navListContainer">
            <div className="HeaderMenu__navList">
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
