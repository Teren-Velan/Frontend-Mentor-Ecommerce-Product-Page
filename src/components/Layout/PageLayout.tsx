import React from "react";
import * as C from "./style";

export interface Props {
  header: React.ReactElement;
  main: React.ReactElement;
}

export const PageLayout: React.FC<Props> = ({ header, main }) => {
  return (
    <C.Container>
      <C.Header>{header}</C.Header>
      <C.Main>{main}</C.Main>
    </C.Container>
  );
};
