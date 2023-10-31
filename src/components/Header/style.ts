import { styled } from "styled-components";

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(219, 219, 219, 0.9);
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex: 2;
  padding: 1rem;
  align-items: center;

  .HeaderMenu__logo {
    img {
      height: 21px;
      margin-bottom: 5px;
      width: 150px;
      margin-left: 1rem;
    }
  }

  img {
    height: 16px;
  }

  .HeaderMenu__NavContainer {
    height: 100%;
    background-color: white;
    width: 65%;
    min-width: 12rem;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid rgb(219, 219, 219, 0.9);
    margin-left: -70%;
    transition: all 0.3s ease-in-out 0s;

    &.active {
      margin-left: 0%;
    }

    .HeaderMenu__closeIcon {
      margin: 1.5rem;
    }

    .HeaderMenu_nav {
      height: 15rem;
      display: flex;

      .HeaderMenu_navList {
        margin-left: 1.5rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-decoration: none;

        a {
          color: var(--Very-dark-blue);
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;

          &:hover {
            width: fit-content;
            border-bottom: 2px solid var(--Orange);
          }
        }
      }
    }
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;

  justify-content: flex-end;

  .HeaderUser__avatar {
    margin-left: 1.25rem;
    img {
      height: 25px;
    }
  }
`;
