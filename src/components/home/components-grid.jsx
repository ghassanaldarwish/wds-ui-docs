import { useMemo } from "react";

import { Index } from "../registry";
import { cn } from "@wds-utils/cn";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useMounted } from "../../hooks/use-mounted";
import { Cog } from "lucide-react";
// https://framerbook.com/animation/example-animations/29-cycling-parent-and-child-variants/

import ComponentPreview from "./component-preview";

function ComponentsGrid() {
  function calculateGridDimensions(number) {
    const maxCols = 12;
    const maxRows = 6;

    const cols = Math.min(number, maxCols);
    const rows = Math.min(Math.ceil(number / maxCols), maxRows);

    return { rows, cols };
  }

  const { rows, cols } = useMemo(() => {
    const leg = Object.keys(Index).length || 0;
    return calculateGridDimensions(leg);
  }, []);

  function getGridSpan(size) {
    switch (size) {
      case "small":
        return {
          colSpan: "col-span-3",
          rowSpan: "row-span-1",
          scale: "scale-90",
        };
      case "medium":
        return {
          colSpan: "col-span-4",
          rowSpan: "row-span-2",
          scale: "scale-75",
        };
      case "large":
        return {
          colSpan: "col-span-6",
          rowSpan: "row-span-3",
          scale: "scale-50",
        };
      default: // medium and other sizes
        return {
          colSpan: "col-span-5",
          rowSpan: "row-span-2",
          scale: "scale-50",
        };
    }
  }

  const mounted = useMounted();
  if (!mounted)
    return (
      <div className="w-full h-full flex justify-center items-center flex-col gap-6 py-16">
        <div className="text-3xl font-bold animate-pulse"> Loading ....</div>
        <Cog className=" h-10 w-10 animate-spin" />
      </div>
    );

  return (
    <LazyMotion
      features={domAnimation}
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0, opacity: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      layoutRoot
    >
      <div
        className={cn(
          "grid  gap-4 ",
          `grid-cols-5 auto-rows-auto md:grid-cols-12 lg:grid-cols-16 overflow-hidden `
        )}
      >
        {Object.keys(Index).map((key, index) => {
          const { size } = Index[key];
          const { colSpan, rowSpan, scale } = getGridSpan(size);

          return (
            <m.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: size === "large" ? [1, 0.7] : [0.7, 0.9],
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.2,
                delay: 0.2 * index,
                times: [0, 1],
                repeat: Infinity,
                repeatDelay: 25,
              }}
              layout
              key={index}
              className={cn(
                "preview flex   w-full h-fit relative justify-center items-center p-2 prose-img:m-0",
                colSpan,
                rowSpan,
                scale
              )}
            >
              <ComponentPreview keyName={key} />
            </m.div>
          );
        })}
      </div>
    </LazyMotion>
  );
}

// https://framerbook.com/animation/example-animations/29-cycling-parent-and-child-variants/

export default ComponentsGrid;
