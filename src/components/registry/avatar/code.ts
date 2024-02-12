const code = `
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@wds-ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/35297725?v=4"
        alt="@wds-ui"
      />
      <AvatarFallback>GH</AvatarFallback>
    </Avatar>
  );
}
`;

export default code;
