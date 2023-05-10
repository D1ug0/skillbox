import React, { useEffect, useState, FC } from "react";
import { useParams } from "react-router-dom";
import { Topic, fetchOneTopic } from "../../api/topicsApi";
import { ContentContainer } from "./ContentStyle";

export const Content: FC = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState<Topic | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOneTopic(Number(id));
      setTopic(data);
    };

    fetchData();
  }, [id]);

  if (!topic) {
    return (
      <ContentContainer>
        There is no such topic. Choose another one.
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
    </ContentContainer>
  );
};

