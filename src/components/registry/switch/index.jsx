import React from "react";
import { Label } from "@wds-ui/label";
import { Switch } from "@wds-ui/switch";
export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
