import { MainProductImage } from "./MainProductImage";
import { MainProductDescription } from "./MainProductDescription";
import * as C from "./style";

export const Main = () => {
  return (
    <C.Main>
      <MainProductImage />
      <MainProductDescription />
    </C.Main>
  );
};
