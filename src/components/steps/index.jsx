export function Steps(props) {
  return (
    <div
      className="mb-12 border-l px-2 lg:px-8 max-w-[900px] w-full"
      {...props}
    />
  );
}

export function Step({ step = 1, ...props }) {
  return (
    <div className="relative flex gap-4 items-center">
      <div className="w-2 -left-2  lg:w-8 border-b absolute lg:-left-8 top-1/2"></div>
      <div className="w-8 h-8 rounded-full text-foreground bg-primary/30 flex justify-center items-center">
        {step}
      </div>

      <div className="flex relative justify-center items-center prose-headings:mt-6 prose-headings:text-lg md:prose-headings:text-2xl">
        {props.children}
      </div>
    </div>
  );
}
