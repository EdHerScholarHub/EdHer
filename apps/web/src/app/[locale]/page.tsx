import { getTranslations } from "next-intl/server";

export default async function IndexPage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h2 className={"text-green-500 text-xl font-bold"}>{t("Title")}</h2>
    </div>
  );
}
