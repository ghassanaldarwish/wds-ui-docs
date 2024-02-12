import { Button } from "@wds-ui/button";
import { cn } from "@wds-utils/cn";
import { Copy } from "lucide-react";

export default function CopyButton({ className, value, ...props }) {
  const onCopy = () => {
    window.navigator.clipboard.writeText(value);
  };
  return (
    <div
      onClick={onCopy}
      className={cn("absolute z-10 top-2 right-2", className)}
    >
      <Button title={"Preview onCopy"} size="icon" {...props}>
        <Copy />
      </Button>
    </div>
  );
}
