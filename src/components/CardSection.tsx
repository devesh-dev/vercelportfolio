"use client";

import Image from "next/image";
import ProjectData from "@/data/ProjectData.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


export function CardSection() {
  return (
    <div className="min-h-screen bg-black py-2 pt-25 ">
      <h2 className="text-center text-5xl pt-5">Projects</h2>
      <div className="flex flex-wrap justify-center ">
        {ProjectData.projects.map((pro,index) => (
          <CardContainer className="inter-var m-4" key={index}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {pro.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {pro.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={pro.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Github →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={pro.link}>Link</Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
