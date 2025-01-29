"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Link from "next/link";
import { useState } from "react";
import {
  FaGithub,
  FaLink,
  FaFigma,
  FaFileAlt,
  FaTools
} from "react-icons/fa";

const RecentProjects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getIcon = (key: string) => {
    switch (key) {
      case 'GitHub':
        return <FaGithub className="inline-block mr-2 text-lg" />;
      case 'live':
        return <FaLink className="inline-block mr-2 text-lg" />;
      case 'figma':
        return <FaFigma className="inline-block mr-2 text-lg" />;
      case 'files':
        return <FaFileAlt className="inline-block mr-2 text-lg" />;
      default:
        return null;
    }
  };


  return (
    <div className="py-20">
      <h1 className="heading">
        A glimpse of some of my <span className="text-blue">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
        {projects.map((item) => (
          <div
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-center w-full sm:max-w-[37rem] lg:max-w-[30rem]"
            key={item.id}
          >
            <CardContainer>
              <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-xl p-6 border w-full h-[25rem] lg:min-h-[30.5rem] flex flex-col"
              >
                <CardItem translateZ="100" className="w-full mt-4 flex-grow">
                  <div className="relative w-full h-[20vh] lg:h-[32vh] overflow-hidden rounded-xl">
                    <div
                      className="absolute inset-0 w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0  w-full object-contain"
                    />
                  </div>
                </CardItem>

                <CardItem translateZ="130">
                  <div className="relative right-25 z-10">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${item.status === "Completed"
                        ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200"
                        : item.status === "Ongoing"
                          ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200"
                          : item.status === "Paused"
                            ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                            : "bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200"
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </CardItem>

                <CardItem
                  translateZ="140"
                  className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1 mt-4"
                >
                  {item.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="150"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </CardItem>

                <div className="flex justify-between items-center mt-7">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="relative group">
                    <CardItem
                      className="flex justify-center items-center px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
                    >
                      <p className="flex lg:text-xl md:text-xs text-sm text-blue">
                        Check Links
                      </p>

                      <FaLocationArrow className="ms-3 text-lg" color="#1DC8EE" />
                    </CardItem>

                    {hoveredCard === item.id && (
                      <div className="absolute top-full mt-2 bg-white border dark:bg-gray-800 rounded-md shadow-md group-hover:block z-[9999999999999] left-[20%]">
                        <div className="absolute top-0 right-4 -mt-2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 z-[-1] " />
                        <div className="max-h-48 overflow-y-auto">
                          {Object.entries(item.links).map(([key, link]) => {
                            if (key === "underConstruction" && item.links.underConstruction) {
                              return (
                                <div
                                  key="underConstruction"
                                  className="flex items-center px-4 py-2 text-gray-800 dark:text-white text-sm"
                                >
                                  <FaTools className="inline-block mr-5 text-lg" />
                                  Under Construction
                                </div>
                              )
                            }
                            if (key !== 'underConstruction') {
                              return (
                                <Link
                                  key={key}
                                  href={link}
                                  target="__blank"
                                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm"
                                >
                                  {getIcon(key)}
                                  <span className="ml-2"> {` ${key.charAt(0).toUpperCase() + key.slice(1)} `}</span>
                                </Link>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;