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
    display: block;
    margin: 0;
  }
`;

export const MainProductImage = styled.div`
  //for large screensize
  display: flex;
  flex-direction: column;
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

  //for mobile screen size
  @media screen and (max-width: 768px) {
    .product-image__small {
      display: none;
    }
    img {
      border-radius: 0;
    }

    .product-image__large {
      margin-bottom: 30px;
      img {
        height: 400px;
        width: 100%;
      }
    }
  }
`;

export const MainProductDescription = styled.div`
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

    .product-pricing__currPriceContainer {
      display: flex;
      align-items: center;
      gap: 1rem;

      .product-pricing__currPrice {
        font-weight: 600;
        font-size: 38px;
      }

      .product-pricing__discountPercentage {
        color: #ff7e1b;
        background-color: #ffeee2;
        padding: 0.25rem 0.5rem;
        border-radius: 8px;
        font-weight: 500;
      }
    }
    .product-pricing__oldPrice {
      margin-top: 20px;
      font-weight: 400;
      font-size: 1.2rem;
      color: #b6bcc8;
      text-decoration: line-through;
    }
  }

  .product-quantity__main {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;

    .product-quantity__counter {
      display: flex;
      width: 180px;
      height: 56px;
      align-items: center;
      justify-content: center;
      background-color: #f6f8fd;
      padding: 1rem;
      border-radius: 10px;
      button {
        cursor: pointer;
        display: contents;
        flex: 1;
        img {
          text-align: -webkit-center;
          width: 1.25rem;
        }
      }
      span {
        font-size: 1.5rem;
        text-align: center;
        flex: 2;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: #ffab6a;
      width: 272px;
      .addtoCart__button {
        display: flex;
        background-color: #ffab6a;
        color: #fff;
      }
    }
    p {
      margin-left: 1rem;
    }
  }

  //for mobile screen size
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    padding: 0 1.5rem;

    .product-description__subtitle {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .product-pricing__main {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .product-pricing__oldPrice {
        margin-top: 0;
      }
    }

    .product-quantity__main {
      flex-direction: column;
      margin-bottom: 4rem;

      .product-quantity__counter {
        display: flex;
        width: 100%;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: #ffab6a;
        width: 100%;
        height: 56px;
        .addtoCart__button {
          display: flex;
          background-color: #ffab6a;
          color: #fff;
        }
      }
    }
  }
`;
