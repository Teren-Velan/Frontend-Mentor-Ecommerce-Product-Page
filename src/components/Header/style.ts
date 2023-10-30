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

  .container {
    height: 100%;
    background-color: white;
    width: 65%;
    min-width: 12rem;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid rgb(219, 219, 219, 0.9);
    /* margin-left: -70%; */
  }

  .HeaderMenu__closeIcon {
    margin: 1.5rem;
  }

  .HeaderMenu_navList {
    /* height: 10rem; */
    line-height: 3rem;
    margin-left: 1.5rem;
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
