"use client";
import { useEffect, useState, startTransition, Suspense } from "react";
import { buttonVariants } from "@wds-ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

import sidebar from "../../config/sidebar";
import { cn } from "@wds-utils/cn";

export default function Pagination() {
  const [pages, setPages] = useState(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    startTransition(() => {
      let pathname = window.location.pathname;

      if (pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1); // Remove the last character (slash)
      }
      const rootPath = pathname.split("/").slice(1)[0];
      const path = `/${rootPath ? rootPath : ""}`;
      pathname = !rootPath ? "/" : pathname;
      const components =
        sidebar.find((item) => item.path === path)?.lists || [];

      const current = components?.find((item) => item.path === pathname);
      const currentIndex = components?.findIndex(
        (item) => item.path === pathname
      );

      const prev = components[currentIndex - 1];
      const next = components[currentIndex + 1];

      setPages({ current, prev, next });
    });
  }, []);

  return (
    <div className="w-[94%] m-auto md:w-full  flex justify-around py-4">
      <Suspense fallback={<div>Loading...</div>}>
        <a
          id="prev-page"
          title="prev page"
          href={pages?.prev?.path}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "no-underline",
            { "opacity-0": !pages?.prev?.name }
          )}
        >
          <>
            <ArrowLeft className="mr-2" /> {pages?.prev?.name}
          </>
        </a>
        <div className="grow"></div>
        <a
          id="next-page"
          title="next page"
          href={pages?.next?.path}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "no-underline",
            { "opacity-0": !pages?.next?.name }
          )}
        >
          <>
            {pages?.next?.name} <ArrowRight className="ml-2" />
          </>
        </a>
      </Suspense>
    </div>
  );
}
