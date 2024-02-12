import React from "react";
import { Label } from "@wds-ui/label";
import { Checkbox } from "@wds-ui/checkbox";

export default function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
