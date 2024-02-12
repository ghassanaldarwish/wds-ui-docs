import { Search as Icon } from "lucide-react";
import { cn } from "@wds-utils/cn";
import { buttonVariants } from "@wds-ui/button";

export default function Search({ className = "" }) {
  return (
    <div
      className={cn(
        buttonVariants({ variant: "outline" }),
        "pl-4 md:pl-14 cursor-not-allowed opacity-20",
        className
      )}
    >
      <Icon />
    </div>
  );
}
