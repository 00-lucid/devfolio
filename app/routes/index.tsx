import ProjectCard from "~/components/ProjectCard";
import TopBar from "~/components/TopBar";

const dummyProjects = [
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
  {
    star: 837,
    link: "https://www.facebook.com/",
    writer: "facebook",
    introduce: "happy software",
    tag: "react next",
  },
];

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
        {dummyProjects.map((project) => {
          return <ProjectCard project={project} />;
        })}
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
