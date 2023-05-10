import React, { useState, FC } from "react";
import { User, UserPopup } from "../popup/UserPopup";
import { HeaderStyle } from "./HeaderStyle";
import { Image } from "../../common/components/Image";
import logo from "../../assets/images/pillz_logo.png";
import logoW from "../../assets/images/pillz_logo.webp";
import userIcon from "../../assets/images/user.png";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const nav = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [user] = useState<User>({
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <HeaderStyle>
      <div style={{ cursor: "pointer" }} onClick={() => nav("/")}>
        <Image
          webp={logoW}
          png={logo}
          width="150px"
          height="50px"
          alt="header_logo"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <button onClick={() => togglePopup()}>
        <Image png={userIcon} width="50px" height="50px" alt="User icon" />
      </button>
      {showPopup && <UserPopup user={user} onClose={togglePopup} />}
    </HeaderStyle>
  );
};

