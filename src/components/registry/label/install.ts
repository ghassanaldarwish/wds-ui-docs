const npm = `
npm install @wds-ui/label
`;

const yarn = `
yarn add @wds-ui/label
`;

const pnpm = `
pnpm add @wds-ui/label
`;

const manually = `
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@wds-utils/cn";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
`;

export default { npm, yarn, pnpm, manually };
