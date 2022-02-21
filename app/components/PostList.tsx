import Tag from "./Tag";

export default function PostList() {
  return (
    <>
      <div className="flex flex-row w-full h-24 border-b justify-around hover:bg-gray-50">
        <section className="flex flex-col items-center justify-center">
          <img src="./icon_eye.png" className="opacity-50 w-5 h-3" />
          <p className="text-xs opacity-50">982</p>
        </section>
        <section className="flex flex-col justify-center">
          <div className="flex flex-row items-center">
            <p className="font-semibold text-base mr-1">
              Microsoft Surface Studio
            </p>
            <p className="opacity-50 text-xs">1hour ago</p>
          </div>
          <div className="flex flex-row">
            <Tag text="front" />
            <Tag text="back" />
          </div>
        </section>
        <section className="flex flex-row items-center">
          <img src="./icon_profile.png" className="w-9 h-9 mr-2" />
          <div>
            <p className="font-semibold text-sm h-5">David</p>
            <p className="text-xs opacity-50">for code</p>
          </div>
        </section>
        <section className="flex flex-row">
          <section className="flex flex-col items-center justify-center mr-4">
            <img src="./icon_calendar.png" className="w-6 h-6" />
            <p className="opacity-50 text-xs">2022/01/12</p>
          </section>
          <section className="flex flex-col items-center justify-center">
            <img src="./icon_team.png" className="w-9 h-6" />
            <p className="opacity-50 text-xs">1~4</p>
          </section>
        </section>
      </div>
    </>
  );
}
