import styled from "styled-components";

export const Main = styled.div`
  //for large screensize
  display: flex;
  margin: 70px auto;
  width: 90%;

  //for medium screen size
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }

  //for mobile screen size
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0%;
  }
`;

export const MainProductImage = styled.div`
  //for large screensize
  display: flex;
  flex-direction: column;
  /* margin-right: 30px; */
  flex: 1;

  img {
    border-radius: 10px;
  }

  .product-image__large {
    cursor: pointer;
    margin-bottom: 30px;
    img {
      height: 450px;
      width: 600px;
    }
  }

  .product-image__small {
    display: flex;
    width: 600px;
    gap: 20px;
    img {
      cursor: pointer;
    }
  }

  //for medium screen size
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }

  //for mobile screen size
  @media screen and (max-width: 768px) {
  }
`;

export const MainProductDescription = styled.div`
  //for large screensize

  margin-left: 125px;
  padding: 50px 0 50px 0;
  flex: 1;

  .product-description__subtitle {
    color: var(--Orange);
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  .product-description__title {
    font-size: 58px;
    margin-bottom: 32px;
  }

  .product-description__features {
    font-weight: 200;
    font-size: 18px;
    color: var(--Light-grey);
    margin-bottom: 20px;
  }

  .product-pricing__main {
    display: flex;
    flex-direction: column;
  }

  .product-pricing__currPrice {
    display: flex;
  }

  //for medium screen size
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }

  //for mobile screen size
  @media screen and (max-width: 768px) {
  }
`;
