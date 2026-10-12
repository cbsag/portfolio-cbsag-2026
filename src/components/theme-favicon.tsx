"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    let icon = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }

    icon.type = "image/png";
    icon.href = resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png";
  }, [resolvedTheme]);

  return null;
}
