"use client";
//uwse 
import React, { useEffect } from "react";
import useThemeStore from "../store/themeStore";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar: React.FC = () => {
  const isDark: boolean = useThemeStore((state) => state.isDark);

  const setIsDark: (isDark: boolean) => void = useThemeStore(
    (state) => state.setIsDark
  );

  return (
    <header
      className={`${
        isDark
          ? "bg-bg_for_dark_bar text-text_for_dark"
          : "bg-bg_for_light_bar text-text_for_light"
      } h-[8vh] flex items-center`}
    >
      <div className="flex justify-between items-center w-[95%] mx-auto">
        <div className="text-xl md:text-2xl">Comic Creator</div>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          {isDark ? (
            <div>
              {" "}
              <MdLightMode />{" "}
            </div>
          ) : (
            <div>
              {" "}
              <MdDarkMode />{" "}
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
