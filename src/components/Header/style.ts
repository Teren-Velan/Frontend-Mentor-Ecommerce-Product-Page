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
