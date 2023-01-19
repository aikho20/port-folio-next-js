import { Fragment, useState } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'
import Header from '../../components/Layouts/Header'
import { projects } from '../../data/projects';
import SocialMedia from '../../components/Layouts/SocialMedial'
import Carousel from'../../components/UI/Carousel'


export default function Projects() {
  const [isOpen,setIsopen]=useState(false)
  return (
  <>
    <Header activePage={2}/>
    <div className='fixed w-10 z-10 right-0 bg-transparent'>
      <SocialMedia/></div>
    <div class="container mx-auto max-w-7xl px-6 p-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 dark:bg-black-400">
    {projects.map(items=>{
      return(
<div class="my-2 max-w-full md:max-w-2/4  lg:max-w-1/4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5" key={items.id}>
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {items.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {items.description}
        </p>
        <a
          onClick={()=>{
            setIsopen(!isOpen)
          }}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
      )
    })}
   <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="absolute z-10" onClose={()=>{setIsopen(!isOpen)}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Project Title
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="mb-2 text-md mt-2 font-semibold text-gray-900 dark:text-white">Key and Responsibilities:</p>
<ul class="max-w-md text-gray-500 list-disc list-inside dark:text-gray-400 text-sm">
    <li>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    </li>
    <li>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    </li>
    <li>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    </li>
</ul>
                  </div>
    <Carousel/>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>{setIsopen(!isOpen)}}
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