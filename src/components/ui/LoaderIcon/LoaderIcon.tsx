import { LoaderCircle } from "lucide-react";

interface LoaderIconProps {
  className?: string;
}

export default function LoaderIcon({ className }: LoaderIconProps) {
  return (
    <span className={className ? className : ""}>
      <LoaderCircle className="loader-circle" />
    </span>
  );
}
