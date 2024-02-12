const code = `
import React from "react";
import { FontBoldIcon } from "@radix-ui/react-icons";

import { Toggle } from "@wds-ui/toggle";
export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  );
}
`;

export default code;
