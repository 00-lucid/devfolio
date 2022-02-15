import ProjectCard from "~/components/ProjectCard";
import TopBar from "~/components/TopBar";

export default function Index() {
  return (
    <>
      <div className="flex flex-row w-full h-96 justify-center items-center">
        <img src="./icon_developer.jpeg" className="w-auto h-auto" />
        <section className="font-semibold text-3xl">
          <p>Devfolio give you</p>
          <p>project solution</p>
          <p>of developer</p>
        </section>
      </div>

      {/* 모바일 화면에서 justify-center 설정필요 */}
      <div className="flex w-full border flex-wrap justify-between">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
