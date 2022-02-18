import Calendar from "~/components/Calendar";
import PostList from "~/components/PostList";
import Search from "~/components/Search";

export default function RecruitmentRoute() {
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

      <section className="flex flex-row">
        <section className="flex flex-col items-center">
          <div className="bg-white w-tablet m-1 rounded-lg overflow-hidden">
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
          </div>
          <div className="my-4">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px">
                <li>
                  <a href="#" className="py-2 px-3 ml-0 text-black bg-gray-100">
                    {"<"}
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-black bg-gray-100">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-black bg-gray-100">
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="py-2 px-3 text-white bg-main-black rounded-lg"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-black bg-gray-100">
                    4
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-black bg-gray-100">
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 ml-0 text-black bg-gray-100 rounded-l-lg"
                  >
                    {">"}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <div className="sticky top-24 bg-white w-minus-tablet h-96 m-1 rounded-lg overflow-hidden p-4">
          <Search />
          <Calendar />
        </div>
      </section>
    </>
  );
}
