import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function ProjectCard({ project }: any) {
  return (
    <>
      <li className="transition ease-in-out flex flex-col w-64 h-80 shadow-xl rounded-2xl bg-white overflow-hidden mb-12 hover:scale-110 duration-300">
        <Link to={project.id}>
          <div className="relative h-48 flex bg-gray-50 justify-center items-center flex-col">
            <img src="./icon_photo.png" className="opacity-10 w-auto h-auto" />
            <span className="bg-black text-white pl-2 pr-2 absolute left-4 bottom-4 font-semibold text-sm">
              {project.name}
            </span>
          </div>
        </Link>
        <section className="flex flex-row p-4 justify-between items-center">
          <section className="flex flex-row flex items-center">
            <Tag text={"aws"} />
            <Tag text={"react"} />
            <img
              src="./icon_more.png"
              className="ml-1 right-0 w-4 h-1 opacity-50"
            />
          </section>
          <section className="flex flex-row items-center">
            <img src="./icon_star.png" className="w-6 h-6 mr-2" />
            <p className="font-semibold text-black opacity-50 text-lg">
              {project.star}
            </p>
          </section>
        </section>
        <section className="relative flex flex-row items-center pl-4 pr-4">
          <img src="./icon_profile.png" className="w-9 h-9 mr-2" />
          <section className="flex flex-col ">
            <p className="font-semibold text-sm h-5">
              {project.writer.username}
            </p>
            <p className="text-xs opacity-50">{project.introduce}</p>
          </section>
          <a
            href={project.link}
            className="absolute right-0 mr-6 w-7 h-7 z-10"
          ></a>
          <img
            src="./icon_link.png"
            className="absolute right-0 mr-6 w-7 h-7 opacity-50"
          />
        </section>
      </li>
    </>
  );
}
