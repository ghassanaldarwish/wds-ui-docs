const npm = `
npm install @wds-ui/collapsible
`;

const yarn = `
yarn add @wds-ui/collapsible
`;

const pnpm = `
pnpm add @wds-ui/collapsible
`;

const manually = `
import * as React from "react";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
`;

export default { npm, yarn, pnpm, manually };
