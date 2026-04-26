import Header from "../components/Layouts/Header";
import { experience, skillSet } from "../data/home";
import SocialMedia from "../components/Layouts/SocialMedial";
import { useTheme } from "next-themes";
import Link from "next/link";
import { InboxIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { projects } from "../data/projects";
import { Card, Gallery, Modal } from "../components/UI";
import useModal from "../hooks/useModal";
import { useState, useRef } from "react";

export default function Home() {
  const { isOpen, open, close, toggle } = useModal();
  const [activeProject, setActiveProject] = useState();
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="flex flex-col justify-center  items-center h-full w-full">
      <div className="relative h-full w-full container">
        <Header />
        <div className="fixed w-10 z-10 right-0 bg-transparent">
          <SocialMedia />
        </div>
        <div
          className=" flex flex-col md:flex-row  min-h-screen w-100 items-center p-4 gap-4"
          id="about-section"
        >
          <div className="sm:mb-8 flex items-center justify-center w-full h-full bg-[radial-gradient(circle,_#575757_1px,_transparent_1px)] bg-[size:20px_20px] rounded">
            <Image
              height={400}
              width={400}
              quality={100}
              src="/1000067666-removebg-preview.png"
              className="grayscale h-100 w-100 padding-5 rounded"
            />
          </div>
          <div className="h-full w-full items-start">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi my name is Marco
            </h1>

            <p className="mt-6 leading-8 text-gray-600  text-md">
              I am a passionate Fullstack Developer with 4 years of professional
              experience building modern, scalable web, mobile, and API-based
              applications. I specialize in developing efficient,
              high-performance, and user-focused solutions. With a strong
              foundation in both front-end and back-end development, I apply
              Object-Oriented Programming (OOP) principles and follow layered
              architecture to build well-structured, maintainable, and scalable
              systems. I also have solid experience working within the Software
              Development Life Cycle (SDLC), from planning and development to
              testing and deployment. Over the years, I’ve worked on delivering
              production-ready applications that emphasize performance,
              maintainability, and clean code practices across web, mobile, and
              backend API systems. I am committed to continuous learning and
              staying up to date with the latest industry trends and best
              practices to consistently deliver high-quality and impactful
              software solutions.
            </p>
            <div className="mt-8 flex gap-x-4">
              <button
                href="/Information"
                color="text-indigo-400"
                className=" bg-indigo-400 p-4 round-md text-white"
              >
                Send Message{" "}
                <span className="text-white-400" aria-hidden="true">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
          <div className="absolute inset-x-0 top-60 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-60">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#514581" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div
          className="flex flex-col justify-evenly md:flex-row"
          id="skills-section"
        >
          <div className="w-full flex flex-col item-start md:items-end p-4">
            <h1 className="text-2xl font-bold tracking-tight ">
              Skills and Technology
            </h1>
            <div className="flex flex-col gap-2 items-end">
              {skillSet.map((items, index) => (
                <div
                  className="flex flex-col gap-2 w-full item-start md:items-end"
                  key={index}
                >
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {items?.title}
                  </h3>
                  <div className="flex flex-wrap justify-start md:justify-end gap-4">
                    {items?.list?.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          className="flex flex-wap p-5 shadow-sm border rounded w-[150px] justify-center"
                          key={idx}
                        >
                          <div className="flex flex-col items-center justify-center">
                            <Icon className="h-8 w-8" />
                            <p className=" text-sm font-semibold my-2">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 w-full block p-4 gap-4">
            <h1 className="text-2xl font-bold tracking-tight">
              Work Experience
            </h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {experience.map((items) => {
                return (
                  <li key={items.title} className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-primary to-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {items.date}
                    </time>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                      {items.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-md text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                      {items.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight p-4 text-center">
          Projects
        </h1>
        <div
          className="container w-100 mx-auto px-6 p-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 dark:bg-black-400"
          id="project-section"
        >
          {projects.map((items, index) => {
            return (
              <div
                key={index}
                className="my-2 max-w-full md:max-w-2/4  lg:max-w-1/4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <Card
                  key={items.id}
                  title={items.title}
                  description={items.description}
                  resources={items.images}
                  responsibilities={items.responsibilities}
                  tech={items.tools}
                  onClick={() => {
                    setActiveProject(items);
                    open();
                  }}
                />
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={isOpen}
          title={"Project Details"}
          onClose={() => {
            close();
            setActiveTab("details");
          }}
        >
          <div className="w-full mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">{activeProject?.title}</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap text-xs">
                {activeProject?.role}
              </p>
            </div>

            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab("details")}
                className={`px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 ${
                  activeTab === "details" ? "border-b-2 border-indigo-400" : ""
                }`}
              >
                Project Details
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 ${
                  activeTab === "gallery" ? "border-b-2 border-indigo-400" : ""
                }`}
              >
                Gallery
              </button>
            </div>

            <div>
              {activeTab === "details" && (
                <div className="">
                  <div>
                    <h2 className="font-semibold mb-2">Overview</h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap text-xs">
                      {activeProject?.description}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold mb-2">Responsibilities</h2>
                    <ul className="space-y-2">
                      {activeProject?.responsibilities?.map((item, index) => (
                        <li key={index} className="flex gap-2 text-gray-700">
                          <span className="">-</span>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap text-xs">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-semibold mb-2">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                      {activeProject?.tech?.map((tech, index) => (
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap text-xs px-2 py-1 border rounded-full">
                          {tech}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div>
                  <Gallery images={activeProject?.images} />
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
