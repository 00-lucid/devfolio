import ProjectCard from "~/components/ProjectCard";
import TopBar from "~/components/TopBar";

export default function Index() {
  return (
    <>
      <div className="flex flex-row w-full h-96 justify-evenly items-center">
        <img src="./icon_coding.png" className="w-32 h-32 mx-12" />
        <section className="font-semibold text-3xl">
          <p>Devfolio give you</p>
          <p>side project solution</p>
          <p>of developer</p>
        </section>
      </div>

      {/* 모바일 화면에서 justify-center 설정필요 */}
      <div className="flex w-full flex-wrap justify-between p-1">
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

      <div className="flex flex-row w-full h-96 justify-evenly items-center">
        <img src="./icon_rocket.png" className="w-28 h-28" />
        <section className="font-semibold text-3xl">
          <p>Get started easily</p>
          <p>your side project</p>
          <p>with devfolio</p>
        </section>
      </div>
    </>
  );
}
