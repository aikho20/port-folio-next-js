import { Fragment, useEffect, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import Header from "../../components/Layouts/Header";
import { projects } from "../../data/projects";
import SocialMedia from "../../components/Layouts/SocialMedial";
import { Card, Carousel } from "../../components/UI";
import Image from "next/image";

export default function Projects() {
  const [isOpen, setIsopen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState();

  return (
    <>
      <Header activePage={2} />
      <div className="fixed w-10 z-10 right-0 bg-transparent">
        <SocialMedia />
      </div>
      <div className="container mx-auto max-w-7xl px-6 p-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 dark:bg-black-400">
        {projects.map((items, index) => {
          return (
            <div
              key={index}
              className="my-2 max-w-full md:max-w-2/4  lg:max-w-1/4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <Card
                title={items.title}
                description={items.description}
                resources={items.images}
                onClick={() => {
                  setTitle(items.title);
                  setDescription(items.description);
                  setImages(items?.images);
                  setIsopen(!isOpen);
                }}
              />
            </div>
          );
        })}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="absolute z-10"
            onClose={() => {
              setIsopen(!isOpen);
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full min-w-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      {title}
                    </Dialog.Title>
                    <Carousel resources={images} />
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{description}</p>

                      <p className="mb-2 text-md mt-2 font-semibold text-gray-900 dark:text-white">
                        Key and Responsibilities:
                      </p>
                      <ul className="max-w-md text-gray-500 list-disc list-inside dark:text-gray-400 text-sm">
                        <li>Client-Side Development.</li>
                        <li>Ensure Browser/Devices Compatibility.</li>
                        <li>Test Website for usability.</li>
                        <li>Maintain and improve the application</li>
                        <li>Optimize applications for maximum speed</li>
                        <li>Design mobile-based and website features</li>
                        <li>Collaborate with back-end developers and web designers to improve usability</li>
                        <li>Get feedback from, and build solutions for, users and customers</li>
                        <li>Write functional requirement documents and guides</li>
                        <li>Create quality mockups and prototypes</li>
                        <li>Help back-end developers with coding and troubleshooting</li>
                        <li>Ensure high quality graphic standards and brand consistency</li>
                        <li>Stay up-to-date on emerging technologies</li>
                      </ul>
                    </div>

                    <div className="mt-4 ">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 dark:bg-gray-400  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 "
                        onClick={() => {
                          setIsopen(!isOpen);
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
