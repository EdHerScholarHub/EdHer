import { Button } from "@repo/ui/components/button";
import { House } from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import Image from "next/image";

import Footer from "../components/home/footer";
import { Link } from "../i18n/navigation";
import NavBar from "../shared/components/nav-bar";

const RootNotFound = async () => {
  const locale = await getLocale();
  return (
    <html>
      <body>
        <NextIntlClientProvider locale={locale}>
          <div className={"h-svh w-svw md:h-screen md:w-screen flex flex-col"}>
            <NavBar />
            <section
              className={"px-4 py-[100px] grow flex flex-col items-center gap-y-14 lg:gap-y-20"}
            >
              <Image
                src={"/assets/not-found.svg"}
                alt={"Not Found"}
                width={300}
                height={300}
              />
              <div className={"text-center"}>
                <h2 className={"mb-4 font-bold text-2xl text-navy"}>Page Not Found!</h2>
                <p className={"mb-4 text-muted-navy font-normal"}>
                  Oops! The page you’re looking for doesn’t exist or has been
                  moved. Please check the URL or return to the homepage.
                </p>
                <Button asChild={true} className={"bg-navy text-white font-bold "}>
                  <Link href={"/home"} locale={locale}>
                    <House />
                    <span>
                      Back to homepage
                    </span>
                  </Link>
                </Button>
              </div>
            </section>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootNotFound;
