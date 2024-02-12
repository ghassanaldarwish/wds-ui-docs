import React from "react";

import { ScrollArea } from "@wds-ui/scroll-area";
import { Separator } from "@wds-ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => "v1.2.0-beta." + String(a.length - i)
);
export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag, index) => (
          <div key={index}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
