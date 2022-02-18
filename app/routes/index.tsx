import ProjectCard from "~/components/ProjectCard";
import TopBar from "~/components/TopBar";

export default function Index() {
  return (
    <>
      <div className="flex flex-row w-full h-96 justify-center items-center">
        <img src="./icon_code.png" className="w-32 h-32 mx-12" />
        <section className="font-semibold text-3xl">
          <p>Devfolio give you</p>
          <p>project solution</p>
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

      <div className="flex flex-row w-full h-96 justify-center items-center">
        <img src="./icon_rocket.jpeg" className="w-52 h-52" />
        <section className="font-semibold text-3xl">
          <p>Get started easily</p>
          <p>your project</p>
          <p>with devfolio</p>
        </section>
      </div>
    </>
  );
}
