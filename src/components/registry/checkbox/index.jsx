import React from "react";

import { Checkbox } from "@wds-ui/checkbox";

export default function CheckboxDemo() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
