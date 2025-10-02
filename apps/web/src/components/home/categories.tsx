import { Laptop2, Palette } from "lucide-react";
import Image from "next/image";

import CategoryItem from "./category-item";

export default function Categories() {
  const categories = [
    { title: "Business", desc: "120 Scholarship", icon: <Image src="/icons/suitcase.svg" alt="philosophy icon" width={40} height={40} /> },
    { title: "Computer Science", desc: "120 Scholarship", icon: <Laptop2 /> },
    { title: "Arts", desc: "120 Scholarship", icon: <Palette /> },
    { title: "Philosophy", desc: "120 Scholarship", icon: <Image src="/icons/philosophy.svg" alt="philosophy icon" width={40} height={40} /> },
    { title: "Finance", desc: "120 Scholarship", icon: <Image src="/icons/finance.svg" alt="philosophy icon" width={40} height={40} /> },
    { title: "Medical", desc: "120 Scholarship", icon: <Image src="/icons/medical.svg" alt="philosophy icon" width={40} height={40} /> },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      {
        categories.map(category => (
          <CategoryItem
            key={category.title}
            {...category}
          />
        ))
      }
    </div>
  );
}
