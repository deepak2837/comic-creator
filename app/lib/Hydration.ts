"use client";

import { useEffect } from "react";
import useThemeStore from "../store/themeStore";

export default function Hydration () {
  useEffect(() => {
    useThemeStore.persist.rehydrate();
  }, []);

  return null;
}
