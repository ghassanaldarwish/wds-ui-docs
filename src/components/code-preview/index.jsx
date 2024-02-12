import React from "react";
import useFullscreenView from "../../hooks/use-fullscreen-view";
import CopyButton from "../copy-button";

import { cn } from "@wds-utils/cn";
import { Icons } from "@wds-ui/icons";

import { Button, buttonVariants } from "@wds-ui/button";
import { Cog } from "lucide-react";

const CodeEditor = React.lazy(() => import("../code-editor"));

function CodePreview({ code = "", language = "javascript" }) {
  const [showCode, setShowCode] = React.useState(false);
  const codeScreen = useFullscreenView();

  return (
    <div className="relative flex gap-4 items-center">
      <CopyButton value={code} />
      {showCode ? (
        <div
          ref={codeScreen?.ref}
          className="w-full h-[500px] relative  overflow-hidden rounded-md border"
          onMouseLeave={() => setTimeout(() => setShowCode(false), 20000)}
        >
          <div
            className={cn(
              buttonVariants({ size: "icon", variant: "outline" }),
              "hidden md:flex absolute z-10 top-2  right-14  gap-1 text-md font-bold justify-center items-center cursor-pointer"
            )}
            onClick={codeScreen?.toggle}
          >
            {codeScreen?.fullscreen ? (
              <Icons.shrink className="w-[26px] h-[26px]" />
            ) : (
              <Icons.expand className="w-[20px] h-[20px] " />
            )}
          </div>
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </div>
            }
          >
            <CodeEditor
              value={code}
              language={language}
              defaultLanguage={language}
            />
          </React.Suspense>
        </div>
      ) : (
        <div className="w-full h-96  overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
          <div className="absolute top-1/4 left-1/2 z-10  transform -translate-x-1/2 -translate-y-1/2">
            <Button
              className="bg-background/90 "
              variant="outline"
              onClick={() => setShowCode(true)}
            >
              <Cog className="mr-2 h-5 w-5 " />
              show more
            </Button>
          </div>
          <div className="h-full rounded-md border w-full backdrop-blur-sm backdrop-opacity-20 bg-gradient-to-t from-background to-transparent  absolute top-0 left-0"></div>
          <pre>
            <code>{code?.slice(0, 300)}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default CodePreview;
