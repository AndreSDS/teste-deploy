import { useContext } from "react";
import { LessonsContext } from "../contexts/lessonContext";

export const useLessons = () => {
  const { getlessons } = useContext(LessonsContext);

  const lessons = getlessons();

  return { lessons };
};
