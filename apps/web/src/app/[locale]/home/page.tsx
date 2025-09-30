import { getTranslations } from "next-intl/server";

import LocaleSelect from "../../../shared/components/locale-select";

export default async function IndexPage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <LocaleSelect />
      <h2 className={"text-green-500 text-xl font-bold"}>{t("Title")}</h2>
    </div>
  );
}
