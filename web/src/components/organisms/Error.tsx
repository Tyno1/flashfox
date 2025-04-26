import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/atoms";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ErrorBoundaryProps {
  message?: string;
  title?: string;
  onRetry?: () => void;
}

export default function ErrorBoundary({
  title = "Oops! Looks Like You Are Lost",
  message = "Lets get you back home",
  onRetry,
}: ErrorBoundaryProps) {
  const navigate = useNavigate();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      navigate(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-destructive" />
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col items-center">
          <CardDescription className="mb-6 text-muted-foreground w-full">
            {message}
          </CardDescription>
          <div className="flex w-full items-center justify-center gap-4">
            <Button onClick={handleRetry}>Try Again</Button>
            <Button onClick={() => navigate("/")}>Go Home</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
