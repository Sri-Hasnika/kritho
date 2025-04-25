import MenuItem from "./MenuItem";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { NEXT_PUBLIC_SIGN_IN_URL } from "@/utils/constants";
import useClickOutside from "@/hooks/useClickOutside";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { User } from "@/types/user";

const UserProfile = ({ currentUser }: { currentUser: User }) => {
  const router = useRouter();

  const [isOpen, setIsOpen, componentRef] = useClickOutside<HTMLDivElement>(false);

  return (
    <div className="">
      <div className="flex gap-1 sm:gap-3 items-center">
        <div
          ref={componentRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative px-2 py-1 rounded-xl bg-slate-800 dark:bg-slate-800 flex items-center gap-2 cursor-pointer shadow-md transition"
        >
          <div className="">
            <Image
              className="rounded-full"
              src={currentUser?.image || "/images/placeholder.jpg"}
              width={30}
              height={30}
              alt="profile img"
            />
          </div>
          <div className="text-slate-300">
            {isOpen ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          {isOpen && (
            <div className="absolute rounded-lg bg-indigo-600 dark:bg-indigo-600 shadow-md min-w-max overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer text-white">
              <div className="">
                <MenuItem
                  onClick={() => {
                    router.push("/profile");
                  }}
                  label="Profile"
                />
                <hr className="border-indigo-500" />
                <MenuItem
                  onClick={() => { signOut({ callbackUrl: NEXT_PUBLIC_SIGN_IN_URL }); localStorage.clear(); }}
                  label="SignOut"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;