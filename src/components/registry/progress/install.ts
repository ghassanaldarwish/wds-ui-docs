const npm = `
npm install @wds-ui/progress
`;

const yarn = `
yarn add @wds-ui/progress
`;

const pnpm = `
pnpm add @wds-ui/progress
`;

const manually = `
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@wds-utils/cn";

const ProgressPrimitiveIndicator = React.forwardRef((props: any, ref: any) => (
  <ProgressPrimitive.Indicator
    ref={ref}
    {...props}
  ></ProgressPrimitive.Indicator>
));

const Progress = React.forwardRef(
  ({ className, value, ...props }: any, ref: any) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitiveIndicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: "translateX(-" + (100 - (value || 0)) + "%)" }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

`;

export default { npm, yarn, pnpm, manually };
