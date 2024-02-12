import { useMounted } from "../../hooks/use-mounted";
import { Cog } from "lucide-react";
import { cn } from "@wds-utils/cn";
import { LazyMotion, domAnimation, m } from "framer-motion";

function MotionComponent({ className, children }) {
  const mounted = useMounted();
  if (!mounted)
    return (
      <div className="w-full h-full flex justify-center items-center flex-col gap-6 py-16">
        <div className="text-3xl font-bold animate-pulse"> Loading ....</div>
        <Cog className=" h-10 w-10 animate-spin" />
      </div>
    );
  return (
    <div className={cn("flex  gap-4 flex-wrap", className)}>
      <LazyMotion
        features={domAnimation}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        layoutRoot
      >
        {children}
      </LazyMotion>
    </div>
  );
}

function Section({ className, children, delay = 0.2, duration = 0.2 }) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 0.8,
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration,
        delay,
        times: [0, 1],
      }}
      layout
    >
      <div className={cn(className)}>{children}</div>
    </m.div>
  );
}
MotionComponent.Section = Section;

export default MotionComponent;
