"use client";
import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsArrowLeftShort, BsFillBellFill } from "react-icons/bs";
import { BiBullseye } from "react-icons/bi";
import { IconType } from "react-icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(true);
  const items = [
    {
      label: "Dashboard",
      icon: MdSpaceDashboard,
      href: "/dashboard",
    },
    {
      icon: BsFillBellFill,
      label: "Notifications",
      href: '/notification'
    },
    {
      label: "Settings",
      icon: IoSettingsOutline,
      href: "/settings",
    },
    
  ];

  return (
    <div className="flex h-full">
      <div
        className={`p-2 h-screen -left-96 lg:left-0 ${
          open ? "w-72" : "w-20"
        } duration-300 justify-start
      item-center h-full shadow-lg rounded-md border
      fixed bg-slate-950 pt-4`}
      >
        <BsArrowLeftShort
          className={`bg-slate-950 text-white text-3xl rounded-full absolute -right-4 top-12 border
     border-white cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <Image onClick={() => router.push('/dashboard')} width='40' height='50'
          src='/images/logo2.png' alt='logo-circle'
            className={` duration-300
          cursor-pointer block float-left mr-2 ml-3 ${
            open && "rotate-[360deg]"
          } `}
          />

          <h1
            className={`text-white mt-1 duration-300 origin-left font-medium text-2xl ${
              !open && "scale-0"
            }`}
          >
            Sentry
          </h1>
        </div>

        <ul className="pt-5 pl-2">
          {items.map(({ icon: Icon, ...item }) => {
            return (
              <>
                <Link href={item.href}>
                  <li key={item.label}
                    className={`
                  text-white text-md flex items-center  gap-x-4 cursor-pointer p-2 hover:bg-slate-500 hover:scale-110 rounded-md mt-2
                `}
                  >
                    <span className={`text-2xl block float-left`}>
                    <Icon size={24} color="white" />
                    </span>
                    <span
                      className={`text-white font-medium flex-1 duration-300 ${
                        !open && "scale-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
