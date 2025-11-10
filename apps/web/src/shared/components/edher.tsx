import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";

export default function EdHer({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span className={cn("text-2xl block font-semibold text-silver", className)} {...props}>
      <Image src="/icons/EdHer_logo.png" width={40} height={40} alt="EdHer Logo" quality={100} priority className="inline mr-2 size-[40px] bg-silver rounded-md" />
      EdHer
    </span>
  );
}
