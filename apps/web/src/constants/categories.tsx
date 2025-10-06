import { Laptop2, Palette } from "lucide-react";
import Image from "next/image";

export const categories = [
  { title: "Business", desc: "120 Scholarships", icon: <Image src="/icons/suitcase.svg" alt="philosophy icon" width={40} height={40} /> },
  { title: "Computer Science", desc: "120 Scholarships", icon: <Laptop2 /> },
  { title: "Arts", desc: "120 Scholarships", icon: <Palette /> },
  { title: "Philosophy", desc: "120 Scholarships", icon: <Image src="/icons/philosophy.svg" alt="philosophy icon" width={40} height={40} /> },
  { title: "Finance", desc: "120 Scholarships", icon: <Image src="/icons/finance.svg" alt="philosophy icon" width={40} height={40} /> },
  { title: "Medical", desc: "120 Scholarships", icon: <Image src="/icons/medical.svg" alt="philosophy icon" width={40} height={40} /> },
];
