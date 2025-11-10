"use client";
import { NextIntlClientProvider } from "next-intl";
import Image from "next/image";

import Footer from "../components/home/footer";
import NavBar from "../shared/components/nav-bar";

const GlobalError = () => {
  return (
    <html>
      <body>
        <NextIntlClientProvider locale={"en"}>
          <div className={"h-svh w-svw md:h-screen md:w-screen flex flex-col"}>
            <NavBar />
            <section
              className={
                "px-4 py-[100px] grow flex flex-col items-center gap-y-14 lg:gap-y-20"
              }
            >
              <Image
                src={"/assets/error.svg"}
                alt={"Not Found"}
                width={300}
                height={300}
              />
              <div className={"text-center"}>
                <h2
                  className={
                    "flex flex-col gap-y-2 mb-4 font-bold text-2xl text-navy"
                  }
                >
                  <span>OOPS!</span>
                  <span>Something went wrong.</span>
                </h2>
                <p
                  className={
                    "max-w-[600px] mb-4 text-muted-navy font-normal md:text-[18px]"
                  }
                >
                  Please refresh page to continue.
                </p>
              </div>
            </section>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default GlobalError;
