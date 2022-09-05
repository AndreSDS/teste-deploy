import { Lesson } from "../components";
import { useLessons } from "../hooks/useLessons";

export const SideBar = () => {
  const { lessons } = useLessons();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-1 border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {lessons?.map(({ id, lessonType, availableAt, title, slug }) => (
          <Lesson
            key={id}
            title={title}
            lessonSlug={slug}
            availabeAt={availableAt}
            type={lessonType}
          />
        ))}
      </div>
    </aside>
  );
};
