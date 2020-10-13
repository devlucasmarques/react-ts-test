import styled from "styled-components";

export interface IItemList {
  color: string;
}

export interface IContent {
  show: boolean;
}

export const ItemList = styled.h3<IItemList>`
  color: ${props => props.color};
  width: 200px;
  margin-left: 5px;
`;

export const ContentList = styled.div<IContent>`
  display: ${props => (props.show ? "flex" : "none")};
  margin: 5px;
  align-items: center;
`;

export const ButtonList = styled.button`
  height: 20px;
  width: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  @media (min-width: 768px) {
    align-items: center;
  }
`;
