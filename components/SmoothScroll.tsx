import { useEffect } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    // Enable smooth scrolling for all anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <>{children}</>;
};