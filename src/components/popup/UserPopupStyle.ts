import { styled } from "styled-components";

export const UserPopupStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const UserPopupContent = styled.div`
  position: relative;

  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  max-height: 500px;
  width: 80vw;
  height: 80vh;
  overflow-y: auto;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 20px;
  color: #000;

  &:hover {
    color: #999;
  }
`;