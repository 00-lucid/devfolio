import { Link } from "react-router-dom";
import { Form } from "remix";

import type { ActionFunction } from "remix";
import { redirect } from "remix";
import { db } from "~/util/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const link = form.get("link");
  const tag = form.get("tag");
  const content = form.get("content");
  const writer = "admin";
  const introduce = "devfolio developer";

  if (
    typeof name !== "string" ||
    typeof content !== "string" ||
    typeof link !== "string" ||
    typeof tag !== "string"
  ) {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, link, tag, content, writer, introduce };
  const project = await db.project.create({ data: fields });
  return redirect(`/showcase`);
};

export default function ShowcaseWriteRoute() {
  return (
    <>
      <Form method="post" className="w-full h-full flex flex-col">
        <div className="flex flex-row items-center w-full mt-20 h-20 mb-4 z-40 bg-gray-100 justify-between">
          <section className="flex flex-row">
            <Link
              to=".."
              className="flex justify-center items-center bg-white border w-24 h-9 rounded mr-2 cursor-pointer"
            >
              <p className="opacity-50 font-semibold text-sm">CANCLE</p>
            </Link>
          </section>
          <section>
            <button
              type="submit"
              className="flex justify-center items-center bg-blue-400 border w-24 h-9 rounded mr-2 cursor-pointer"
            >
              <p className="text-white font-semibold text-sm">CREATE</p>
            </button>
          </section>
        </div>
        <div className="text-sm font-bold text-gray-700 tracking-wide">
          Project Name
        </div>
        <input
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black bg-gray-100 mb-4"
          type=""
          name="name"
        />
        <div className="text-sm font-bold text-gray-700 tracking-wide">
          Project Link (Optional)
        </div>
        <input
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black bg-gray-100 mb-4"
          type=""
          name="link"
        />
        <div className="text-sm font-bold text-gray-700 tracking-wide">Tag</div>
        <input
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black bg-gray-100 mb-4"
          type=""
          name="tag"
        />
        <div className="text-sm font-bold text-gray-700 tracking-wide mb-2">
          Project Explanation
        </div>
        <div>
          <button className="w-10 h-10 font-semibold text-base hover:bg-white">
            H1
          </button>
          <button className="w-10 h-10 font-semibold text-base hover:bg-white">
            H2
          </button>
          <button className="w-10 h-10 font-semibold text-base hover:bg-white">
            H3
          </button>
          <button className="w-10 h-10 font-semibold text-base hover:bg-white">
            H4
          </button>
          <button className="w-10 h-10 font-semibold text-base hover:bg-white">
            B
          </button>
          <button className="w-10 h-10 font-semibold text-base hover:bg-white">
            I
          </button>
          <button className="w-10 h-10 font-semibold text-base hover:bg-white">
            T
          </button>
        </div>
        <textarea
          name="content"
          className="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-black w-full bg-gray-100 resize-none outline-none flex-1"
        ></textarea>
      </Form>
    </>
  );
}
