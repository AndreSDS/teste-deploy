import { useContext } from "react";
import { LessonsContext } from "../contexts/lessonContext";

export const useLessonBySlug = (slug: string) => {

  const {getlessonBySlug} = useContext(LessonsContext);

  const lesson = getlessonBySlug(slug);

  return { lesson };
};
