export default function Tag({ text }: { text: string }) {
  return (
    <>
      <div className="flex justify-center items-center bg-orange-400 rounded-xl w-12 h-6 text-white text-sm font-base mr-1">
        {text}
      </div>
    </>
  );
}
