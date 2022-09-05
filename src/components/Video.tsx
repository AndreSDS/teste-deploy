import { useQuery } from "@apollo/client";
import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useLessonBySlug } from "../hooks/useLessonBySlug";

interface VideoProps {
  lessonSlug: string;
}

export const Video = ({ lessonSlug }: VideoProps) => {
  const { lesson } = useLessonBySlug(lessonSlug);

  if (!lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video bg-slate-600">
          <Player>
            <Youtube videoId={lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={lesson.teacher.avatarURL}
                alt={lesson.teacher.name}
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="
              p-4
              text-sm
              bg-green-500
              flex items-center
              rounded font-bold
              uppercase gap-2
              justify-center
              hover:bg-green-700
              transition-colors
              "
            >
              <DiscordLogo size={24} />
              Conunidade do Dicord
            </a>

            <a
              href="#"
              className="p-4
              text-sm
              border
              border-blue-500
              flex
              items-center
              rounded
              font-bold
              text-blue-500
              uppercase
              gap-2
              justify-center
              hover:bg-blue-500
              hover:text-gray-500
              transition-colors
              "
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="
          bg-gray-700
          rounded
          overflow-hidden
          flex
          items-stretch
          gap-6
          hover:bg-gray-600
          transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Meterial complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>

            <div className="h-full p-6 flex items-ceter">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="
          bg-gray-700
          rounded
          overflow-hidden
          flex
          items-stretch
          gap-6
          hover:bg-gray-600
          transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos dp ignite lab
              </p>
            </div>

            <div className="h-full p-6 flex items-ceter">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
