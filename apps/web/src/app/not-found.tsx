import { Button } from "@repo/ui/components/button";
import { getLocale } from "next-intl/server";
import Link from "next/link";

const RootNotFound = async () => {
  const locale = await getLocale();
  return (
    <html>
      <body>
        <div>Root Not found</div>
        <Button asChild={true}>
          <Link href={`/${locale}/home`}>Go to Home</Link>
        </Button>
      </body>
    </html>
  );
};

export default RootNotFound;
