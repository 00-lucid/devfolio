import { Project } from "@prisma/client";
import { Link } from "react-router-dom";
import { LoaderFunction, useLoaderData } from "remix";
import Tag from "~/components/Tag";
import { db } from "../../util/db.server";

type LoaderData = { project: any };

export const loader: LoaderFunction = async ({ params }) => {
  const project = await db.project.findUnique({
    where: { id: params.projectId },
    include: {
      writer: {
        select: {
          username: true,
        },
      },
    },
  });
  if (!project) throw new Error("project not found");
  const data: LoaderData = { project };
  return data;
};

export default function ShowCaseProjectRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <div className="flex flex-row items-center w-full mt-20 h-20 mb-4 z-40 bg-gray-100 justify-between">
        <section className="flex flex-row">
          <Link
            to=".."
            className="flex justify-center items-center bg-white border w-24 h-9 rounded mr-2 cursor-pointer"
          >
            <p className="opacity-50 font-semibold text-sm">CANCLE</p>
          </Link>
        </section>
      </div>
      <div className="text-5xl font-semibold mb-4">{data.project.name}</div>

      <section className="flex flex-row items-center mb-4">
        <img src="../icon_profile.png" className="w-9 h-9 mr-2" />
        <section className="flex flex-col ">
          <p className="font-semibold text-sm h-5">
            {data.project.writer.username}
          </p>
          <p className="text-xs opacity-50">{data.project.introduce}</p>
        </section>
      </section>

      <section className="flex flex-row items-center mb-4">
        <img src="../icon_star.png" className="w-6 h-6 mr-2" />
        <p className="font-semibold text-black opacity-50 text-lg">
          {data.project.star}
        </p>
      </section>

      <div className="text-blue-500 mb-4">{data.project.link}</div>

      <section className="flex flex-row flex items-center mb-4">
        <Tag text={"aws"} />
        <Tag text={"react"} />
        <img
          src="./icon_more.png"
          className="ml-1 right-0 w-4 h-1 opacity-50"
        />
      </section>

      <main>
        <p>{data.project.content}</p>
      </main>
    </>
  );
}
