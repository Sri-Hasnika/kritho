import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <button onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
        <div className="rounded-full cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-800 p-2 text-slate-300">
          {resolvedTheme === "light" ?
            <MdOutlineDarkMode className="text-xl" /> :
            <MdOutlineLightMode className="text-xl" />
          }
        </div>
      </button>
    </>
  );
}