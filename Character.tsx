import React, { useState } from "react";
import { ItemList, ContentList, ButtonList } from "./Styles";

interface ICharacter {
  text: string;
  color: string;
}

const Character: React.FC<ICharacter> = ({ text, color }) => {
  let [isShow, setShow] = useState(true);

  return (
    <ContentList show={isShow}>
      <ButtonList onClick={() => setShow((isShow = false))}>-</ButtonList>
      <ItemList color={color}>{text}</ItemList>
    </ContentList>
  );
};

export default Character;
