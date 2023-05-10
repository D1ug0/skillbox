import React, { useState, useEffect, FC } from "react";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import { NavPanel } from "./components/navigation/NavPanel";
import { Content } from "./components/content/Content";
import { fetchTopics, Topic } from "./api/topicsApi";
import { ContentContainer } from "./components/content/ContentStyle";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 100px);
`;

export const App: FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  const fetchAllTopics = async () => {
    const topicsData = await fetchTopics();
    setTopics(topicsData);
  };
  useEffect(() => {

    fetchAllTopics();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <NavPanel topics={topics} />
        <Routes>
          <Route
            path="/"
            element={
              <ContentContainer>
                Please select a topic from the list
              </ContentContainer>
            }
          />
          <Route path="/topics/:id" element={<Content />} />
          <Route
            path="*"
            element={<ContentContainer>Error: page not found</ContentContainer>}
          />
        </Routes>
      </Container>
    </>
  );
};
