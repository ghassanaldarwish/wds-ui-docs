import { cn } from "@wds-utils/cn";
//import { useState, useEffect } from "react";

export default function DocumentHeadings({ headings = [], path = "/" }) {
  // const [currentHash, setCurrentHash] = useState("");

  // useEffect(() => {
  //   const handleMessage = (event) => {
  //     setCurrentHash(event);
  //     // Perform actions based on the received message
  //   };
  //   window.addEventListener("message", handleMessage);
  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);

  // console.log({ currentHash: currentHash });

  return headings?.length > 0 ? (
    <aside className="hidden  flex-col gap-2 col-span-2 px-2 pt-4 h-[calc(100vh-50px)] relative border-r animate-in fade-in duration-300">
      {headings.map((heading, i) => {
        return (
          <a
            key={i}
            href={`${path}#${heading.slug}`}
            className={cn(
              "block   hover:underline transition-all duration-300"
            )}
          >
            {heading?.text?.length > 20
              ? `${heading.text.slice(0, 20)}...`
              : heading.text}
          </a>
        );
      })}
    </aside>
  ) : (
    <></>
  );
}
