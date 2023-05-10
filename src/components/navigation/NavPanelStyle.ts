import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavPanelStyle = styled.div`
  width: 20%;
  border-right: 1px solid black;
  padding: 10px;
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Li = styled.li`
  padding: 20px;
`;

export const NavLink = styled(Link)`
  font-size: 20px;
  text-align: center;
  border-bottom: 1px solid black;
  color: black;
  &:hover {
    color: #999;
  }
`;
