import { cn } from "@repo/ui/lib/utils";

type VolunteerCardProps = {
  Icon: React.ReactNode;
  header: string;
  desc: string;
  continerStyle?: string;
};
export default function IconCard({ header, desc, Icon, continerStyle }: VolunteerCardProps) {
  return (
    <div className={cn("border-2 border-papaya px-6 py-10", continerStyle)}>
      <div className="mb-4">
        {Icon}
      </div>
      <div className="text-navy font-archivo">
        <p className="text-xl font-bold mb-2 md:mb-4">{header}</p>
        <p className="leading-6 md:text-lg text-navy/80">{desc}</p>
      </div>
    </div>
  );
}
