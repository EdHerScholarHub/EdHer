export default function CategoryItem({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 rounded-xl grid place-items-center text-center px-4 py-6">
      <div className="bg-silver size-14 md:size-20 rounded-full grid place-items-center *:size-8 md:*:size-10 text-muted-navy *:stroke-[2.5px] ">
        {icon}
      </div>
      <div className="text-muted-navy">
        <p className="font-medium mt-4 text-sm md:text-base mb-1">{title}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
