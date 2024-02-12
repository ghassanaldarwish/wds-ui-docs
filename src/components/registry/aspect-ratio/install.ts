const npm = `
npm install @wds-ui/aspect-ratio
`;

const yarn = `
yarn add @wds-ui/aspect-ratio
`;

const pnpm = `
pnpm add @wds-ui/aspect-ratio
`;

const manually = `
import * as React from "react";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
`;

export default { npm, yarn, pnpm, manually };
