import { cn } from "@repo/ui/lib/utils";

export default function EdHer({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span className={cn("text-2xl block font-semibold text-silver", className)} {...props}>
      EdHer
    </span>
  );
}
