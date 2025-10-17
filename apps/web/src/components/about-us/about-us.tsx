import Image from "next/image";

export default function AboutUs({ h1, h2, p, img, flip = false }: { h1: string; h2: string; p: string; img: string; flip?: boolean }) {
  return (
    <div className="lg:px-6 mt-5 md:mt-8 lg:mt-12">
      <h1 className="header">{h1}</h1>

      <div className={`relative flex flex-col ${flip ? "md:flex-row" : "md:flex-row-reverse"} gap-4 p-2 md:p-6 lg:p-10`}>
        <div className="overflow-hidden max-h-[320px] min-h-full basis-1/2 rounded-md w-fit mx-auto">
          <Image
            src={img}
            alt="EdHer Our story Image"
            width={628}
            height={324}
            className="mx-auto rounded-md object-cover h-full"
          />
        </div>

        <div className="text-navy basis-1/2">
          <h2 className="text-navy text-lg md:text-xl lg:text-xl font-semibold mb-2">
            {h2}
          </h2>
          <p className="text-sm md:text-base lg:text-lg py-2 text-pretty hyphens-auto">
            {p}
          </p>
        </div>
        <div className={`absolute top-0 bottom-0 left-0 right-0 opacity-15 z-[-1] rounded-2xl ${flip ? "bg-papaya md:left-[20%]" : "bg-navy md:right-[20%]"}`} />
      </div>

    </div>
  );
}
