import { Button, buttonVariants } from "@wds-ui/button";

import { Github, Linkedin, Menu as MenuIcon, Heart } from "lucide-react";
import { ScrollArea } from "@wds-ui/scroll-area";
import sidebar from "@/src/config/sidebar";
import { cn } from "@wds-utils/cn";

import { Sheet, SheetContent, SheetTrigger } from "@wds-ui/sheet";
import { useEffect, useState } from "react";
import Search from "./search";
export default function Menu() {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    let pathname = window.location.pathname;
    if (pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1); // Remove the last character (slash)
    }
    setPath(pathname);
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          id="sidebar menu"
          title="sidebar menu"
          size="icon"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <aside className=" h-full relative animate-in fade-in duration-300">
          <div className="flex gap-2 mb-2">
            <div
              class={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "opacity-30 cursor-not-allowed hidden lg:flex "
              )}
            >
              <Heart size={20} className="fill-red-500 " />
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ghassan-aldarwish-029682172"
              class={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "cursor-pointer"
              )}
            >
              <Linkedin size={20} />
            </a>
            {/* <a
              target="_blank"
              href="https://www.facebook.com/webdrei3"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "cursor-pointer"
              )}
            >
              <Facebook size={20} />
            </a> */}

            <a
              target="_blank"
              href="https://github.com/Ghassanooooo/wds"
              class={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              <Github size={20} />
            </a>
            <a
              target="_blank"
              href="https://www.npmjs.com/search?q=wds-ui"
              class={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
              >
                <path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z" />
                <path
                  fill="#fff"
                  d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"
                />
              </svg>
            </a>
            <Search className="pl-4" />
          </div>
          <ScrollArea className="h-full w-full absolute bottom-0 ">
            {sidebar.map((group, index) => {
              // Define Component only if group.icon exists
              const Component = group?.icon ? group?.icon : null;

              return (
                <div key={index}>
                  <h3 className="font-bold flex gap-2 items-center mb-4 capitalize text-xl">
                    {Component && <Component />}
                    {group.name}
                  </h3>
                  <ul className="mb-6">
                    {group.lists.map((list, index) => {
                      // Define Component for each list item if list.icon exists
                      const ListItemIcon = list?.icon ? list?.icon : null;

                      return (
                        <li key={index} class="mb-2 flex gap-2  items-center ">
                          {ListItemIcon && (
                            <span
                              class={cn(
                                "fill-foreground",
                                {
                                  "fill-primary text-primary":
                                    path === list.path,
                                },
                                { "opacity-20": list.disabled }
                              )}
                            >
                              <ListItemIcon />
                            </span>
                          )}
                          {list.disabled ? (
                            <div
                              className={cn(
                                "opacity-20 capitalize  cursor-not-allowed"
                              )}
                            >
                              {list.name}
                            </div>
                          ) : (
                            <a
                              className={cn(
                                "hover:underline opacity-70 capitalize  ",
                                { "font-bold opacity-90": path === list.path }
                              )}
                              href={list.path}
                            >
                              {list.name}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </ScrollArea>
        </aside>
      </SheetContent>
    </Sheet>
  );
}
