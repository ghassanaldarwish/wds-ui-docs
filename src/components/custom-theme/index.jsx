import { useMounted } from "../../hooks/use-mounted";
import useCustomTheme from "../../hooks/use-custom-theme";
import { cn } from "@wds-utils/cn";
import { Palette } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@wds-ui/popover";
import { Button } from "@wds-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@wds-ui/card";
import { Input } from "@wds-ui/input";
import { Label } from "@wds-ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@wds-ui/tabs";

import { buttonVariants } from "@wds-ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wds-ui/tooltip";
const themes = [
  {
    name: "night owl",
    value: "night-owl",
    color: "5f7e9779",
  },
  {
    name: "github light",
    value: "github-light",
    color: "24292e",
  },
];

function CustomTheme() {
  const { theme, setTheme } = useCustomTheme();

  console.log(theme);

  return (
    <div className="z-10 animate-in zoom-in duration-500 flex absolute top-[10px] right-[10px] md:right-[12px]  flex-col gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <div
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "cursor-pointer group relative"
            )}
          >
            <Palette />
            <span className="hidden absolute top-1/2 -translate-y-1/2 p-[2px] rounded-md group-hover:block -left-[110px] text-center  w-[100px] bg-muted">
              Custom Theme
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-[90vw] h-[80vh] max-w-[400px] max-h-[400px]"
          align="end"
          alignOffset={1}
          sideOffset={5}
        >
          <Tabs
            defaultValue="colors"
            className="w-full border-none outline-none focus-visible:ring-0 shadow-none"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="colors">colors</TabsTrigger>
              {/* <TabsTrigger value="radius">Radius</TabsTrigger> */}
            </TabsList>
            {/* <TabsContent
              value="radius"
              className="border-none outline-none focus-visible:ring-0 shadow-none"
            >
              <Card className="border-none outline-none focus-visible:ring-0 shadow-none">
                <CardContent className="space-y-2">radius</CardContent>
              </Card>
            </TabsContent> */}
            <TabsContent
              value="colors"
              className="border-none outline-none focus-visible:ring-0 shadow-none "
            >
              <Card className="border-none outline-none focus-visible:ring-0 shadow-none ">
                <CardHeader className="p-0 pb-2">
                  <CardTitle>Theme Name: {theme}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-5 gap-4">
                    {themes.map((theme, i) => {
                      return (
                        <TooltipProvider key={i}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                onClick={() => setTheme(theme.value)}
                                key={i}
                                style={{ background: "#" + theme.color }}
                                className={cn(
                                  "w-full h-8 border text-muted-foreground cursor-pointer relative group rounded-md"
                                )}
                              ></div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{theme.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
}
export default CustomTheme;
