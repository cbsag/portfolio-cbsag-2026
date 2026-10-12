"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]').forEach((icon) => icon.remove());

    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/png";
    icon.sizes = "any";
    icon.dataset.dynamicFavicon = resolvedTheme;
    icon.href = `${resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"}?theme=${resolvedTheme}`;
    document.head.appendChild(icon);
  }, [resolvedTheme]);

  return null;
}
