import { Post } from "@prisma/client";
import Tag from "./Tag";

export default function PostList({ post }: any) {
  return (
    <>
      <li className="flex flex-row w-full h-24 border-b hover:bg-gray-50">
        <section className="flex flex-col items-center justify-center w-24">
          <img src="./icon_eye.png" className="opacity-50 w-5 h-3" />
          <p className="text-xs opacity-50">{post.view}</p>
        </section>
        <section className="flex flex-col justify-center w-96">
          <div className="flex flex-row items-center">
            <p className="font-semibold text-base mr-1 cursor-pointer">
              {post.title}
            </p>
            <p className="opacity-50 text-xs">{post.createdAt}</p>
          </div>
          <div className="flex flex-row">
            <Tag text="front" />
            <Tag text="back" />
          </div>
        </section>
        <section className="flex flex-row items-center w-40">
          <img src="./icon_profile.png" className="w-9 h-9 mr-2" />
          <div>
            <p className="font-semibold text-sm h-5">{post.writer}</p>
            <p className="text-xs opacity-50">{post.introduce}</p>
          </div>
        </section>
        <section className="flex flex-row justify-evenly flex-1">
          <section className="flex flex-col items-center justify-center mr-4">
            <img src="./icon_calendar.png" className="w-6 h-6" />
            <p className="opacity-50 text-xs">{post.scale_date}</p>
          </section>
          <section className="flex flex-col items-center justify-center mr-4">
            <img src="./icon_team.png" className="w-8 h-6" />
            <p className="opacity-50 text-xs">{post.scale_people}</p>
          </section>
        </section>
      </li>
    </>
  );
}
