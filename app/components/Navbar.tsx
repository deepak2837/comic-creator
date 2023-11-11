"use client";

import React, { useEffect } from "react";
import useThemeStore from "../store/themeStore";

const Navbar: React.FC = () => {
  const isDark: boolean = useThemeStore((state) => state.isDark);

  const setIsDark: (isDark: boolean) => void = useThemeStore(
    (state) => state.setIsDark
  );

  return (
    <section
      className={`${isDark ? "bg-bg_for_dark" : "bg-bg_for_light"} h-[8vh]`}
    >
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </section>
  );
};

export default Navbar;