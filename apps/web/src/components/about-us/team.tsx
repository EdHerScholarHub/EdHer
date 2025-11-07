"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/components/carousel";
import Image from "next/image";
import { useState } from "react";

import type { TTeamMember, TTeamName } from "../../constants/team";

import { list } from "../../constants/team";

export default function Team() {
  const [selectedTeam, setSelectedTeam] = useState<TTeamName>("Myanmar Team");

  return (
    <div>
      <div className="flex gap-2 my-5">
        {
          list.map((team, i) => (
            <div key={Object.keys(team)[0]} className="text-silver">
              <input
                type="radio"
                name="team"
                id={Object.keys(team)[0]}
                defaultChecked={i === 0}
                onChange={(e) => {
                  setSelectedTeam(e.target.id as TTeamName);
                }}
                className="peer appearance-none"
              />
              <label htmlFor={Object.keys(team)[0]} className="text-navy select-none peer-checked:underline underline-offset-8 decoration-2 font-archivo font-medium sm:text-lg p-2 rounded-sm">
                {Object.keys(team)[0]}
              </label>
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-1">
        {
          list.map(team => (
            <Carousel
              key={Object.keys(team)[0]}
              opts={{
                loop: false,
                align: "start",
              }}
              className={`mb-5 grid [grid-column:1] [grid-row:1] transition-opacity ${team[selectedTeam] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
              <CarouselContent>
                {
                  Object.values(team)[0]!.map(member => (
                    <CarouselItem
                      key={member.id}
                      className={`basis-1/2 md:basis-1/3 lg:basis-1/4`}
                    >
                      <MemberCard {...member} />
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
              <CarouselPrevious className="!top-[calc(100%+30px)] !left-[calc(50%-40px)]" />
              <CarouselNext className="!top-[calc(100%+30px)] !right-[calc(50%-40px)]" />
            </Carousel>
          ),
          )
        }
      </div>
    </div>
  );
}

function MemberCard({ name, position, img }: TTeamMember) {
  return (
    <div className="text-navy mx-auto w-fit overflow-hidden">
      <Image src={img} width={300} height={300} alt={name} className=" rounded-md mb-2" />
      <p className="font-medium">{name}</p>
      <p className="text-sm">{position}</p>
    </div>
  );
}
