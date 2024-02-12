const code = `
import React from "react";
import { Button } from "@wds-ui/button";
import { ToastAction, useToast, Toaster } from "@wds-ui/toast";

export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </>
  );
}

`;

export default code;
