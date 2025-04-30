import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative h-[0.3rem] w-[13rem] max-w-[90%] rounded-[1.8rem] bg-foreground/15 overflow-hidden">
        <div
          className="absolute inset-y-0 left-[-100%] w-full bg-foreground"
          style={{
            transform: `translate3d(${progress}%,0px,0px)`,
          }}
        />
      </div>
    </div>
  );
} 