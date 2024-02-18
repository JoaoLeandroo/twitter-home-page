import { CiSettings } from "react-icons/ci";

export default function Home() {
  return (
    <div className="ml-[80px] md:ml-[300px]">
      <div className="w-full h-14 bg-[#F2FAEBa1] sticky top-0 flex border-b border-zinc-400">
        <span className="h-full cursor-pointer w-[275px] font-semibold flex items-center justify-center hover:bg-zinc-100 border-r border-zinc-400">
          Para Você
        </span>
        <span className="h-full cursor-pointer w-[275px] flex items-center justify-center hover:bg-zinc-100">
          Seguindo
        </span>
        <div className="w-[50px] flex items-center justify-center">
          <CiSettings
            size={30}
            className="cursor-pointer hover:opacity-75 hover:drop-shadow-lg"
          />
        </div>
      </div>
      <div className="bg-green-100 h-[300px]">
        <span>testing...</span>
      </div>
      <br />
      <div className="bg-green-100 h-[300px]">
        <span>testing...</span>
      </div>
      <br />
      <div className="bg-green-100 h-[300px]">
        <span>testing...</span>
      </div>
      <br />
      <div className="bg-green-100 h-[300px]">
        <span>testing...</span>
      </div>
      <br />
      <div className="bg-green-100 h-[300px]">
        <span>testing...</span>
      </div>
      <br />
    </div>
  );
}
