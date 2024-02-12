import {
  Suspense,
  useState,
  forwardRef,
  useEffect,
  startTransition,
  lazy,
} from "react";
import {
  AnimatePresence,
  motion,
  LazyMotion,
  domAnimation,
  useAnimation,
  m,
} from "framer-motion";
import { Icons } from "@wds-ui/icons";

import { ScrollArea } from "@wds-ui/scroll-area";
import useMeasure from "react-use-measure";
import { Button, buttonVariants } from "@wds-ui/button";
import { cn } from "@wds-utils/cn";
import { Index } from "../registry";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wds-ui/tooltip";

// eslint-disable-next-line react-refresh/only-export-components
const ComponentPreview = lazy(() => import("./component-preview"));
// eslint-disable-next-line react-refresh/only-export-components
const Viewport = ({ height, className, ...props }) => {
  if (height < 290) {
    return (
      <motion.div
        className={cn(
          "bg-muted/10 aspect-[16/16] sm:aspect-[16/9]  border flex items-center justify-center overflow-hidden ",
          className
        )}
        {...props}
      ></motion.div>
    );
  }
  return (
    <ScrollArea
      className={cn(
        "bg-muted/10 aspect-[16/16] sm:aspect-[16/9]  border flex items-center justify-center overflow-hidden ",
        className
      )}
      {...props}
    ></ScrollArea>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
function ComponentPresence() {
  const controls = useAnimation();
  const [keyNames, setKeyNames] = useState({});
  useEffect(() => {
    setKeyNames(Object.keys(Index));
  }, []);

  let [count, setCount] = useState(0);
  let [isPointerOver, setIsPointerOver] = useState(false);

  let previous = usePrevious(count);
  let [ref, { width, height }] = useMeasure();
  let direction = count > previous ? 1 : -1;

  const next = () => {
    if (!keyNames) return;
    if (count >= keyNames.length - 1) return;
    startTransition(() => {
      setCount(count + 1);
    });
  };

  const prev = () => {
    if (!keyNames) return;
    if (count === 0) return;
    startTransition(() => {
      setCount(count - 1);
    });
  };
  useEffect(() => {
    if (!keyNames) return;
    // Only set up the interval when the pointer is not over the component

    if (isPointerOver || count >= keyNames.length - 1) controls.stop();
    if (!isPointerOver) {
      const interval = setInterval(() => {
        controls.start({
          scale: [0.8, 1],
          opacity: [0, 1],

          transition: {
            duration: 0.5,
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 5,
          },
        });
        startTransition(() => {
          setCount((count) => {
            if (count >= keyNames.length - 1) {
              return 0;
            }
            return count + 1;
          });
        });
      }, 5000);
      return () => clearInterval(interval);
    }
    // Clear the interval when the component is unmounted or when isPointerOver becomes true
  }, [controls, count, isPointerOver, keyNames]);
  return (
    <div
      onMouseLeave={() => setIsPointerOver(false)}
      onMouseEnter={() => setIsPointerOver(true)}
      onTouchStart={() => setIsPointerOver(true)}
      onTouchEnd={() => setIsPointerOver(false)}
      className="relative mt-4 flex flex-col gap-4 justify-center  w-[100%] h-full  md:h-[50vh]  "
    >
      <div className="flex w-full gap-4 justify-center">
        <motion.div layout animate={{ scale: [0.8, 1], opacity: [0, 1] }}>
          <Button
            id="previous component"
            title="previous component"
            onMouseLeave={() => setIsPointerOver(false)}
            onMouseEnter={() => setIsPointerOver(true)}
            onTouchStart={() => setIsPointerOver(true)}
            onTouchEnd={() => setIsPointerOver(false)}
            disabled={count === 0}
            variant="outline"
            size="icon"
            onClick={prev}
          >
            <Icons.arrowLeft className="h-5 w-5" />
          </Button>
        </motion.div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                onMouseLeave={() => setIsPointerOver(false)}
                onMouseEnter={() => setIsPointerOver(true)}
                href={`/components/${keyNames[count] || ""}`}
                className="space-x-4 relative min-w-[250px]"
              >
                <motion.div
                  layout
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    " capitalize w-full text-foreground/80 underline text-xl font-semibold"
                  )}
                >
                  <div> {keyNames[count] || ""}</div>
                </motion.div>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Installation instructions </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <motion.div layout animate={controls}>
          <Button
            id="next component"
            title="next component"
            onMouseLeave={() => setIsPointerOver(false)}
            onMouseEnter={() => setIsPointerOver(true)}
            onTouchStart={() => setIsPointerOver(true)}
            onTouchEnd={() => setIsPointerOver(false)}
            disabled={count >= keyNames?.length - 1}
            variant="outline"
            size="icon"
            onClick={next}
          >
            <Icons.arrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      <Viewport height={height}>
        <AnimatePresence custom={{ direction, width, height }}>
          <LazyMotion features={domAnimation} layoutRoot>
            <m.div
              layout
              key={count}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2, delay: 0.2 }}
              ref={ref}
              className={cn(
                " w-full  h-fit relative flex justify-center items-center p-4  md:p-10"
              )}
              custom={{ direction, width, height }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <ComponentPreview
                  variants={variants}
                  custom={{ direction, width, height }}
                  keyName={keyNames[count] || "button"}
                />
              </Suspense>
            </m.div>
          </LazyMotion>
        </AnimatePresence>
      </Viewport>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
    scale: 0.8,
  }),
  center: ({ height }) => {
    return {
      x: 0,
      scale: height > 300 ? 0.78 : 1,
    };
  },
  exit: ({ direction, width }) => ({
    x: direction * -width,
    scale: 0.8,
  }),
};

function usePrevious(state) {
  let [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(ComponentPresence);
