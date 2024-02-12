const npm = `
npm install @wds-ui/checkbox
`;

const yarn = `
yarn add @wds-ui/checkbox
`;

const pnpm = `
pnpm add @wds-ui/checkbox
`;

const manually = `
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@wds-utils/cn";

const CheckboxPrimitiveRoot = React.forwardRef(
  ({ className, ...props }: any, ref: any) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    ></CheckboxPrimitive.Root>
  )
);

const CheckboxPrimitiveIndicator = React.forwardRef((props: any, ref: any) => (
  <CheckboxPrimitive.Indicator
    ref={ref}
    {...props}
  ></CheckboxPrimitive.Indicator>
));

const Checkbox = React.forwardRef((props: any, ref: any) => (
  <CheckboxPrimitiveRoot ref={ref} {...props}>
    <CheckboxPrimitiveIndicator>
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitiveIndicator>
  </CheckboxPrimitiveRoot>
));

export { Checkbox };
`;

export default { npm, yarn, pnpm, manually };
