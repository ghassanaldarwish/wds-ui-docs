import { cn } from "@wds-utils/cn";
import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader } from "@wds-ui/card";
function ComponentsFeatures() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      layout
      className={cn(" container grid  grid-cols-12 gap-4 w-full px-4")}
    >
      <Card className="col-span-12 md:col-span-6 xl:col-span-3 ">
        <CardHeader>
          <h2 className="text-2xl md:text-3xl bold">Unique DX</h2>
          <CardDescription className="text-md md:text-xl text-foreground">
            @wds-ui is fully-typed to minimize the learning curve, and provide
            the best possible developer experience.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="col-span-12 md:col-span-6 xl:col-span-3">
        <CardHeader>
          <h3 className="text-2xl md:text-3xl bold">Fast</h3>
          <CardDescription className="text-md md:text-lg text-foreground">
            Separated packages and built on top of Tailwind CSS, which means
            small bundle, no runtime styles, and no unnecessary classes in your
            bundle.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="col-span-12 md:col-span-6 xl:col-span-3 ">
        <CardHeader>
          <h4 className="text-2xl md:text-3xl bold">Themeable</h4>
          <CardDescription className="text-md md:text-lg text-foregroundl">
            Provides a style system to customize default themes, you can change
            all semantic tokens or create an entire new theme.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="col-span-12 md:col-span-6 xl:col-span-3 ">
        <CardHeader>
          <h5 className="text-2xl md:text-3xl bold">Motion animation</h5>
          <CardDescription className="text-md md:text-lg text-foreground">
            It powers the amazing animations and interactions in Framer, the web
            builder for creative pros. Zero code, maximum speed.
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export default ComponentsFeatures;
