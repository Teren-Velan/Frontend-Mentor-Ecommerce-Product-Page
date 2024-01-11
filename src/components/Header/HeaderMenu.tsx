import * as C from "./style";
import IconMenu from "../../assets/images/header/icon-menu.svg";
import Logo from "../../assets/images/header/logo.svg";
import CloseIcon from "../../assets/images/header/icon-close.svg";
import { NavbarCategoriesList } from "../../modules/Header/constant";
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux";
import { toggleNavbar } from "../../feature/toggle/toggleSlice";

export const HeaderMenu: React.FC = () => {
  //returns the current state of isToggleNavbar
  const navbarToggleBoolean = useAppSelector(
    (state) => state.toggle.isToggleNavbar
  );

  const dispatch = useAppDispatch();

  //function to handle navbar toggle
  const handleNavbarToggle = () => {
    dispatch(toggleNavbar());
  };

  return (
    <C.HeaderMenu>
      <button
        onClick={() => {
          handleNavbarToggle();
        }}
      >
        <img src={IconMenu} alt="menu-icon" />
      </button>
      <a className="HeaderMenu__logo" href="">
        <img src={Logo} alt="logo" />
      </a>

      <nav className={`${navbarToggleBoolean ? "HeaderMenu__nav" : ""}`}>
        <div
          className={`HeaderMenu__NavContainer ${
            navbarToggleBoolean ? "active" : ""
          }`}
        >
          <button
            className="HeaderMenu__closeIcon"
            onClick={() => {
              handleNavbarToggle();
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
