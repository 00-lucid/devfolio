import ProjectCard from "~/components/ProjectCard";

export default function ShowcaseRoute() {
  return (
    <>
      <div className="flex flex-row items-center w-full mt-20 h-20 mb-4 z-40 bg-gray-100 justify-between">
        <section className="flex flex-row">
          <div className="flex justify-center items-center bg-white border w-24 h-9 rounded mr-2 cursor-pointer">
            <p className="opacity-50 font-semibold text-sm">POSITION</p>
          </div>
          <div className="flex justify-center items-center bg-white border w-24 h-9 rounded mr-2 cursor-pointer">
            <p className="opacity-50 font-semibold text-sm">TAG</p>
          </div>
          <div className="flex justify-center items-center bg-white border w-24 h-9 rounded mr-2 cursor-pointer">
            <p className="opacity-50 font-semibold text-sm">STAR</p>
          </div>
        </section>
        <section>
          <div className="flex justify-center items-center bg-blue-400 border w-24 h-9 rounded mr-2 cursor-pointer">
            <p className="text-white font-semibold text-sm">CREATE</p>
          </div>
        </section>
      </div>
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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
