import styled from "styled-components";

const media = {
  //   mobile: "@media(min-width:375px)",
  desktop: "@media(min-width:1440px)",
};

export const Container = styled.div`
  width: 100%;

  ${media.desktop} {
    overflow: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 5rem;

  ${media.desktop} {
    width: "80%";
  }
`;

export const Main = styled.div`
  width: 100%;

  ${media.desktop} {
    width: 80%;
    overflow: none;
  }
`;
