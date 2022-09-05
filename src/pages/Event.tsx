import { useParams } from "react-router-dom";
import { Header, SideBar, Video } from "../components";
import { useLessons } from "../hooks/useLessons";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lessons } = useLessons();

  const currentSlug = slug ? slug : lessons[0]?.slug;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {currentSlug ? (
          <Video lessonSlug={currentSlug} />
        ) : (
          <div className="flex-1"></div>
        )}
        <SideBar />
      </main>
    </div>
  );
};
