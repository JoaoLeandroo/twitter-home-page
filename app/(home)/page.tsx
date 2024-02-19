import { CiSettings, CiImageOn, CiBoxList } from "react-icons/ci";
import { MdEmojiEmotions, MdOutlineGifBox } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

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

      <div className="w-full flex h-[150px] border-b border-zinc-400">
        <div className="h-full w-11 relative">
          <MdEmojiEmotions size={40} className="absolute top-3 left-3" />
        </div>

        <div className="h-full w-full flex flex-col">
          <div>
            <textarea
              placeholder="O que está acontecendo?"
              className="w-full h-[100px] p-5 text-xl outline-none resize-none"
            ></textarea>
          </div>

          <nav className="flex justify-between">
            <div className="flex items-center gap-x-3 w-full h-full">
              <div className="w-7 h-7 transition duration-300 cursor-pointer hover:bg-sky-200 flex items-center justify-center rounded full">
                <CiImageOn size={20} color="blue" />
              </div>
              <div className="w-7 h-7 transition duration-300 cursor-pointer hover:bg-sky-200 flex items-center justify-center rounded full">
                <MdOutlineGifBox size={20} color="blue" />
              </div>
              <div className="w-7 h-7 transition duration-300 cursor-pointer hover:bg-sky-200 flex items-center justify-center rounded full">
                <CiBoxList size={20} color="blue" />
              </div>
              <div className="w-7 h-7 transition duration-300 cursor-pointer hover:bg-sky-200 flex items-center justify-center rounded full">
                <GrEmoji size={20} color="blue" />
              </div>
              <div className="w-7 h-7 transition duration-300 cursor-pointer hover:bg-sky-200 flex items-center justify-center rounded full">
                <LuCalendarClock size={20} color="blue" />
              </div>
              <div className="w-7 h-7 transition duration-300 cursor-pointer hover:bg-sky-200 flex items-center justify-center rounded full">
                <IoLocationOutline size={20} color="blue" className="md:w-11"/>
              </div>
            </div>

            <div>
              <button className="px-5 py-2 rounded-full bg-sky-500">
                Postar
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
