import axios from "axios";

export interface Topic {
  id: number;
  title: string;
  content: string;
}

export const fetchTopics = async (): Promise<Topic[]> => {
  const response = await axios.get<Topic[]>("http://localhost:3000/topics");
  return response.data;
};

export const fetchOneTopic = async (id: number): Promise<Topic> => {
  const response = await axios.get<Topic>(
    `http://localhost:3000/topics?id=${id}`
  );
  return response.data[0];
};


