import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";
import { useLessons } from "../hooks/useLessons";

interface LessonProps {
  title: string;
  lessonSlug: string;
  availabeAt: Date;
  type: "live" | "class";
}

export const Lesson = ({
  title,
  lessonSlug,
  availabeAt,
  type,
}: LessonProps) => {
  const { lessons } = useLessons();
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(new Date(availabeAt));
  const availabelDateFormated = format(
    new Date(availabeAt),
    "EEEE' • 'dd' de 'MMMM' • 'k'h'm",
    {
      locale: ptBR,
    }
  );

  const currentSlug = slug ? slug : lessons[0]?.slug;

  const isActiveLesson = lessonSlug === currentSlug;

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <span className="text-gray-300">{availabelDateFormated}</span>
      <div>
        {isActiveLesson && (
          <span className="flex h-3 w-3 relative left-[-6px] top-[70px] rotate-45 bg-green-500 "> </span>
        )}

        <div
          className={`${
            isActiveLesson ? "bg-green-500" : 'border'
          } rounded border-gray-500 p-4 mt-2 group-hover:border-green-500`}
        >
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span
                className={`${
                  isActiveLesson ? "text-white" : "text-blue-500"
                } flex items-center gap-2 text-sm font-medium`}
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Em breve
              </span>
            )}

            <span
              className={`${
                isActiveLesson ? "border-white" : "border-green-300"
              } text-xs rounded py-[0.125rem] px-2 text-white font-bold border`}
            >
              {type === "live" ? "AO VIVO" : "Aula Prática"}
            </span>
          </header>

          <strong
            className={`${
              isActiveLesson ? "text-white" : "text-gray-200"
            }  mt-5 block`}
          >
            {title}
          </strong>
        </div>
      </div>
    </Link>
  );
};
