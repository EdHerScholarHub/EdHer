"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import { useLocale } from "next-intl";
import Image from "next/image";

import { useRouter } from "../../i18n/navigation";

const LocaleSelect = () => {
  const locale = useLocale();
  const router = useRouter();

  const langChange = (value: string) => {
    if (value !== locale) {
      router.push("/home", { locale: value });
    }
  };
  return (
    <Select onValueChange={langChange} value={locale}>
      <SelectTrigger className={"p-3 bg-navy text-white font-semibold"}>
        {/* <Image */}
        {/*  src={`/icons/${locale}-flag.png`} */}
        {/*  alt={`${locale} flag icon`} */}
        {/*  width={40} */}
        {/*  height={40} */}
        {/*  className={"w-6 aspect-square"} */}
        {/* /> */}
        <SelectValue />
      </SelectTrigger>
      <SelectContent className={"bg-[#3e5179] text-white font-semibold"}>
        <SelectItem value={"en"}>
          <Image
            src={"/icons/en-flag.png"}
            alt={"English flag icon"}
            width={40}
            height={40}
            className={"w-6 aspect-square"}
          />
          <span>English</span>
        </SelectItem>
        <SelectItem value={"mm"}>
          <Image
            src={"/icons/mm-flag.png"}
            alt={"Myanmar flag icon"}
            width={40}
            height={40}
            className={"w-6 aspect-square"}
          />
          <span>Burmese</span>
        </SelectItem>
        <SelectItem value={"my"}>
          <Image
            src={"/icons/my-flag.png"}
            alt={"Malaysia flag icon"}
            width={40}
            height={40}
            className={"w-6 aspect-square"}
          />
          <span>Malay</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSelect;
