const npm = `
npm install @wds-ui/skeleton
`;

const yarn = `
yarn add @wds-ui/skeleton
`;

const pnpm = `
pnpm add @wds-ui/skeleton
`;

const manually = `
import * as React from "react";

import { cn } from "@wds-utils/cn";
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
`;

export default { npm, yarn, pnpm, manually };
