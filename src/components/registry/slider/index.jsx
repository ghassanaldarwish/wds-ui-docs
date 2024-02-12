import React from "react";
import { Slider } from "@wds-ui/slider";
export default function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />;
}
