const npm = `
npm install @wds-ui/scroll-area
`;

const yarn = `
yarn add @wds-ui/scroll-area
`;

const pnpm = `
pnpm add @wds-ui/scroll-area
`;

const manually = `
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@wds-utils/cn";

const ScrollAreaPrimitiveViewport = React.forwardRef((props: any, ref: any) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    {...props}
  ></ScrollAreaPrimitive.Viewport>
));

const ScrollArea = React.forwardRef(
  ({ className, children, ...props }: any, ref: any) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitiveViewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitiveViewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaPrimitiveScrollAreaThumb = React.forwardRef(
  (props: any, ref: any) => (
    <ScrollAreaPrimitive.ScrollAreaThumb
      ref={ref}
      {...props}
    ></ScrollAreaPrimitive.ScrollAreaThumb>
  )
);

const ScrollBar = React.forwardRef(
  ({ className, orientation = "vertical", ...props }: any, ref: any) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" &&
          "h-2.5 border-t border-t-transparent p-[1px]",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitiveScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
`;

export default { npm, yarn, pnpm, manually };
