import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

const Spotlight = React.forwardRef<HTMLDivElement, SpotlightProps>(
  ({ className, fill }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none fixed z-[1] h-32 w-32 rounded-full opacity-50 transition-opacity duration-300",
          className
        )}
        style={{
          background: `radial-gradient(circle at center, ${fill || '#fff'} 0%, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
  }
);

Spotlight.displayName = "Spotlight";

export { Spotlight };