import { useState } from "react";

function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("This is a test error to check the error boundary!");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Error Boundary Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            This page is designed to test the error boundary. Clicking the button below will intentionally throw an error to see if the error boundary catches it properly.
          </p>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This is a safe test. The error boundary will prevent the entire app from crashing.
            </AlertDescription>
          </Alert>

          <Button
            variant="destructive"
            onClick={() => setShouldError(true)}
          >
            Throw Test Error
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ErrorTest;
