import React, { FC, MouseEvent } from "react";
import ReactDOM from "react-dom";
import {
  ButtonClose,
  UserPopupContent,
  UserPopupStyle,
} from "./UserPopupStyle";

export type User = {
  name: string;
  age: number;
  email: string;
};

type UserPopupProps = {
  user: User;
  onClose: () => void;
};

export const UserPopup: FC<UserPopupProps> = ({ user, onClose }) => {
  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <UserPopupStyle onClick={handleOutsideClick}>
      <UserPopupContent>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <ButtonClose onClick={onClose}>×</ButtonClose>
      </UserPopupContent>
    </UserPopupStyle>,
    document.body
  );
};


