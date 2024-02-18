import Link from "next/link";
import { FaXTwitter, FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail, MdEmojiEmotions } from "react-icons/md";
import { RiFileListLine, RiQuillPenLine } from "react-icons/ri";
import { HiOutlineSave } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { CgMoreO } from "react-icons/cg";

const AsiderRight = () => {
  return (
    <aside className="w-[80px] md:w-[300px] border-r border-zinc-500 text-zinc-700 fixed top-0 min-h-screen">
      <nav className="w-[80%] md:block flex flex-col">
        <div className="w-[80%] mt-1 mb-2">
          <Link
            href={"/"}
            className="inline-block p-3 rounded-full text-xl w-[55px] hover:bg-sky-300 transition duration-300"
          >
            <div className="flex items-center justify-center">
              <FaXTwitter size={30} />
            </div>
          </Link>
        </div>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <GoHome size={30} />
            <span className="hidden md:block font-bold text-xl ml-2 mr-5">
              Página Inicial
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <IoIosSearch size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Explorar
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <IoMdNotificationsOutline size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Notificações
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <MdOutlineMail size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Mensagens
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <RiFileListLine size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Listas
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <HiOutlineSave size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Itens salvos
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <HiOutlineUsers size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Comunidades
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <FaXTwitter size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Premium
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <FaRegUser size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Perfil
            </span>
          </div>
        </Link>

        <Link
          href={"/"}
          className="inline-block p-2 rounded-full text-xl hover:bg-sky-300 transition duration-300"
        >
          <div className="w-full h-full flex items-center justify-center gap-x-3">
            <CgMoreO size={30} />
            <span className="hidden md:block font-medium ml-2 mr-5 text-xl">
              Mais
            </span>
          </div>
        </Link>
      </nav>
      <button className="bg-sky-500 w-[80%] text-white font-bold h-14 rounded-full text-lg hover:bg-sky-600 duration-300 mt-1 flex items-center justify-center">
        <span className="hidden md:block">Postar</span>
        <RiQuillPenLine size={30} className="block md:hidden" />
      </button>

      <div className="flex mt-4 py-2 items-center w-[90%] rounded-full cursor-pointer hover:bg-zinc-300 duration-300">
        <div className="m-auto md:ml-4 md:mr-1">
          <MdEmojiEmotions size={50} />
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-xs font-bold">Usuario232323</span>
          <span className="text-sm">@user_23</span>
        </div>
      </div>
    </aside>
  );
};

export default AsiderRight;
