const npm = `
npm install @wds-ui/radio-group
`;

const yarn = `
yarn add @wds-ui/radio-group
`;

const pnpm = `
pnpm add @wds-ui/radio-group
`;

const manually = `
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@wds-utils/cn";

const RadioGroup = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        {...props}
        ref={ref}
      />
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupPrimitiveIndicator = React.forwardRef(
  (props: any, ref: any) => (
    <RadioGroupPrimitive.Indicator
      ref={ref}
      {...props}
    ></RadioGroupPrimitive.Indicator>
  )
);

const RadioGroupItem = React.forwardRef(
  ({ className, children, ...props }: any, ref: any) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitiveIndicator className="flex items-center justify-center">
          <CheckIcon className="h-3.5 w-3.5 fill-primary" />
        </RadioGroupPrimitiveIndicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
`;

export default { npm, yarn, pnpm, manually };
