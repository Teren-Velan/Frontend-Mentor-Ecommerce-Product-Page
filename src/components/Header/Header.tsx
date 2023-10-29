import { HeaderMenu } from "./HeaderMenu";
import { HeaderUser } from "./HeaderUser";
import * as C from "./style";

export const Header: React.FC = () => {
  return (
    <C.Header>
      <HeaderMenu />
      <HeaderUser />
    </C.Header>
  );
};
