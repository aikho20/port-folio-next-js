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
      <div className="container w-100 mx-auto px-6 p-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 dark:bg-black-400">
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

            <div className="fixed inset-0 overflow-y-auto flex align-center justify-center">
              <div className="flex max-w-[700px] min-w-[300px] items-center justify-center p-4 text-center">
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
                      <p className="text-md text-gray-500 py-2 text-bolder">About</p>
                      <p className="text-sm text-gray-500">{description}</p>
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
