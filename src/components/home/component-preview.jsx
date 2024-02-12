import { useMemo, forwardRef } from "react";
import { motion } from "framer-motion";

import { Index } from "../registry";

const ComponentPreview = forwardRef(
  ({ keyName, custom, variants, ...props }, ref) => {
    const Preview = useMemo(() => {
      const Component = Index?.[keyName]?.component;
      return (
        <motion.div
          className="h-fit w-full relative flex justify-center items-center"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={custom}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          {Index?.[keyName]?.touchDisabled && (
            <div className="absolute w-full h-full z-10 cursor-not-allowed" />
          )}
          <Component key={keyName} {...props} />
        </motion.div>
      );
    }, [keyName]);

    return Preview;
  }
);
ComponentPreview.displayName = "ComponentPreview";
export default ComponentPreview;
