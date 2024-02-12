const npm = `
npm install @wds-ui/switch
`;

const yarn = `
yarn add @wds-ui/switch
`;

const pnpm = `
pnpm add @wds-ui/switch
`;

const manually = `
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@wds-utils/cn";

const SwitchPrimitivesThumb = React.forwardRef((props: any, ref: any) => (
  <SwitchPrimitives.Thumb ref={ref} {...props}></SwitchPrimitives.Thumb>
));

const Switch = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitivesThumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
`;

export default { npm, yarn, pnpm, manually };
