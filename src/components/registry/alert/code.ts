const code = `
import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@wds-ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
`;

export default code;
