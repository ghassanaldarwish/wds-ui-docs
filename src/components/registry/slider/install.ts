const npm = `
npm install @wds-ui/slider
`;

const yarn = `
yarn add @wds-ui/slider
`;

const pnpm = `
pnpm add @wds-ui/slider
`;

const manually = `
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@wds-utils/cn";

const SliderPrimitiveTrack = React.forwardRef((props: any, ref: any) => (
  <SliderPrimitive.Track ref={ref} {...props}></SliderPrimitive.Track>
));

const SliderPrimitiveRange = React.forwardRef((props: any, ref: any) => (
  <SliderPrimitive.Range ref={ref} {...props}></SliderPrimitive.Range>
));

const SliderPrimitiveThumb = React.forwardRef((props: any, ref: any) => (
  <SliderPrimitive.Thumb ref={ref} {...props}></SliderPrimitive.Thumb>
));

const Slider = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitiveTrack className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitiveRange className="absolute h-full bg-primary" />
    </SliderPrimitiveTrack>
    <SliderPrimitiveThumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
`;

export default { npm, yarn, pnpm, manually };
