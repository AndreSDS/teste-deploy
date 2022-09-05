import { gql, useQuery } from "@apollo/client";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ILesson {
  id: string;
  availableAt: Date;
  title: string;
  slug: string;
  lessonType: "live" | "class";
}

interface ILessonBySlug {
  title: string;
  description: string;
  videoId: string;
  teacher: {
    avatarURL: string;
    name: string;
    bio: string;
  };
}

interface ILessonResponse {
  lessons: ILesson[];
}

interface ILessonBySlugResponse {
  lesson: ILessonBySlug;
}

interface ILessonContextProps {
  getlessons: () => ILesson[];
  getlessonBySlug: (slug: string) => ILessonBySlug;
}

interface LessonsProviderProps {
  children: ReactNode;
}

export const LessonsContext = createContext<ILessonContextProps>(
  {} as ILessonContextProps
);

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`;

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      description
      videoId
      teacher {
        avatarURL
        name
        bio
      }
    }
  }
`;

export const LessonsProvider = ({ children }: LessonsProviderProps) => {
  function getlessons() {
    const { data } = useQuery<ILessonResponse>(GET_LESSONS_QUERY);

    return data?.lessons ?? ([] as ILesson[]);
  }

  function getlessonBySlug(slug: string) {
    const { data } = useQuery<ILessonBySlugResponse>(GET_LESSON_BY_SLUG, {
      variables: {
        slug,
      },
    });

    return data?.lesson ?? ({} as ILessonBySlug);
  }

  return (
    <LessonsContext.Provider value={{ getlessons, getlessonBySlug }}>
      {children}
    </LessonsContext.Provider>
  );
};
