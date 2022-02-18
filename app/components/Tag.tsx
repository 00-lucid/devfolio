export default function Tag({ text }: { text: string }) {
  return (
    <>
      <div className="flex justify-center items-center bg-orange-400 rounded-xl w-11 h-5 text-white text-xs font-base mr-1">
        {text}
      </div>
    </>
  );
}
