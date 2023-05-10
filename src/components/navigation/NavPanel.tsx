import React, { FC } from "react";
import { Li, Nav, NavLink, NavPanelStyle, Ul } from "./NavPanelStyle";

interface Topic {
  id: number;
  title: string;
  content: string;
}

interface NavPanelProps {
  topics: Topic[];
}

export const NavPanel: FC<NavPanelProps> = ({ topics }) => {
  return (
    <NavPanelStyle>
      <Nav>
        <Ul>
          {topics.map((topic: Topic) => (
            <NavLink key={topic.id} to={`/topics/${topic.id}`}>
              <Li>{topic.title}</Li>
            </NavLink>
          ))}
        </Ul>
      </Nav>
    </NavPanelStyle>
  );
};


