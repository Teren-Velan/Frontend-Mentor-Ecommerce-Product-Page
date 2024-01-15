import { MainProductImage } from "./MainProductImage";
import { MainProductDescription } from "./MainProductDescription";
import * as C from "./style";
import { useState } from "react";

export const Main = () => {
  const [productQuantity, setProductQuantity] = useState(0);
  return (
    <C.Main>
      <MainProductImage />
      <MainProductDescription
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
      />
    </C.Main>
  );
};
