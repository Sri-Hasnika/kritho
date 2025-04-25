"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import UserProfile from "./UserProfile";
import ThemeSwitch from "./ThemeSwitch";
import { GrMenu } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { User } from "@/types/user";
interface Props {
  currentUser: User;
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ currentUser, menu, setMenu }: Props) => {
  const router = useRouter();
  const [popover, setPopover] = useState(false);
  const pathname = usePathname();
  const Back = () => {
    router.back();
  };
  const Menu = () => {
    setMenu(!menu);
  };
  const isCoursePage = pathname.startsWith("/courses/");

  return (
    <div className="shadow-md px-2 z-50 sticky top-0 bg-slate-900 dark:bg-slate-900">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-3 text-xl font-semibold">
          <div className="flex items-center gap-3">
            {!isCoursePage ? (
              <div
                onClick={Menu}
                className="p-2 rounded-full hover:bg-slate-800 dark:hover:bg-slate-800 cursor-pointer text-slate-300"
              >
                <GrMenu className="text-xl" />
              </div>
            ) : (
              <div
                onClick={Back}
                className="p-2 rounded-full hover:bg-slate-800 dark:hover:bg-slate-800 cursor-pointer text-slate-300"
              >
                <IoMdArrowRoundBack className="text-xl" />
              </div>
            )}
            <Link href="/" className="hidden md:flex text-indigo-400">
              NAME
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          {currentUser?.role == "ADMIN" &&
            <h1 className="text-sm font-medium text-indigo-400">
              ADMIN
            </h1>
          }
          <ThemeSwitch />
          <div className="rounded-full cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-800 p-2 text-slate-300">
            <div onClick={() => setPopover((prev) => !prev)}>
              <IoMdNotificationsOutline className="text-xl" />
            </div>
            {popover && (
              <div className="flex flex-col justify-between absolute right-0 w-64 mr-5 h-60 mt-5 text-center bg-slate-800 dark:bg-slate-800 rounded-lg shadow-lg p-2 text-slate-200">
                <div>
                  <h1 className="text-xl font-bold text-indigo-400">Notifications</h1>
                  <p className="my-2 text-sm font-medium">No notifications received yet</p>
                </div>
                <div>
                  <button className="w-full p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium">Clear all</button>
                </div>
              </div>
            )}
          </div>
          <UserProfile currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;