import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  LifebuoyIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserIcon,
  SunIcon,
  HomeIcon,
  XMarkIcon,
  CodeBracketIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import Link from "next/link";

const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Projects",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/Projects",
    icon: CodeBracketIcon,
  },
  {
    name: "Personal Information",
    description: "Your customers' data will be safe and secure.",
    href: "/Information",
    icon: UserIcon,
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "mailto:marco.deguzman.ico@gmail.com",
    icon: LifebuoyIcon,
  },
  {
    name: "Contact",
    description:
      "You will see all my social media information to easily contact me.",
    href: "mailto:marco.deguzman.ico@gmail.com",
    icon: PhoneIcon,
  },
  {
    name: "Personal Blog",
    description: "Under Development.",
    href: "/",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how I take your privacy seriously.",
    href: "/",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ activePage }) {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(theme === "light" ? false : true);
  }, [theme]);
  return (
    <Popover className="relative dark:bg-black-400">
      <div className="mx-auto max-w-7xl px-6 dark:bg-black-400">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 gap-3">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">MARCO ICO</span>
              <p className="px-2.5 py-2 text-indigo-400 text-3xl">MI</p>
            </Link>
          </div>
          <div className="hidden space-x-10 md:flex">
            <Link
              href="/"
              className={`text-base font-medium ${
                activePage === 1 ? "text-indigo-400" : "text-gray-500"
              } dark:hover:text-white hover:text-gray-900 flex flex-row gap-1 -m-3 items-center`}
            >
              <HomeIcon
                className={`h-5 w-5 flex-shrink-0 ${
                  activePage === 1 ? "text-indigo-400" : "text-gray-500"
                }`}
              />
              Home
            </Link>
          </div>
          <div className="hidden space-x-10 md:flex">
            <Link
              href="/Projects"
              className={`text-base font-medium ${
                activePage === 2 ? "text-indigo-400" : "text-gray-500"
              } dark:hover:text-white hover:text-gray-900 flex flex-row gap-1 -m-3 items-center`}
            >
              <CodeBracketIcon
                className={`h-5 w-5 flex-shrink-0 ${
                  activePage === 2 ? "text-indigo-400" : "text-gray-500"
                }`}
              />
              Projects
            </Link>
          </div>
          <div className="hidden space-x-10 md:flex">
            <Link
              href="/Information"
              className={`text-base font-medium ${
                activePage === 3 ? "text-indigo-500" : "text-gray-500"
              } dark:hover:text-white hover:text-gray-900 flex flex-row gap-1 -m-3 items-center`}
            >
              <UserIcon
                className={`h-5 w-5 flex-shrink-0 ${
                  activePage === 3 ? "text-indigo-500" : "text-gray-500"
                }`}
              />
              Information
            </Link>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center dark:bg-gray-900 rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex ">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md dark:bg-black-400 text-base font-medium dark:hover:text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="dark:bg-gray-900 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50  dark:hover:bg-gray-800"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden space-x-1 md:flex">
            <p className="text-gray-500 mr-2">Dark Mode</p>
            <Switch
              checked={!enabled}
              onChange={() => {
                setEnabled(!enabled);
                setTheme(theme === "light" ? "dark" : "light");
              }}
              className={`${
                enabled ? " bg-indigo-400" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled
                    ? "translate-x-6 ring-1 ring-white text-white"
                    : "translate-x-1 bg-white "
                } inline-block h-4 w-4 transform rounded-full p-1  transition`}
              >
                {enabled ? <MoonIcon /> : <SunIcon />}
              </span>
            </Switch>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <p className="whitespace-nowrap text-base font-medium text-gray-500">
              Dagupan City, Pangasinan
            </p>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-20 "
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-900">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="sr-only">MARCO ICO</span>
                  <p className=" px-2.5 py-2 rounded-full text-indigo-400 text-3xl">
                    MI
                  </p>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center dark:bg-gray-900 rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6 dark:bg-gray-900"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <div className="-m-3 flex items-center ml-1">
                    <Switch
                      checked={enabled}
                      onChange={() => {
                        setEnabled(!enabled);
                        setTheme(theme === "light" ? "dark" : "light");
                      }}
                      className={`${
                        enabled ? " bg-indigo-400" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full mr-3`}
                    >
                      <span
                        className={`${
                          enabled
                            ? "translate-x-6 ring-1 ring-white bg-indigo-400"
                            : "translate-x-1 bg-white"
                        } inline-block h-4 w-4 transform rounded-full p-1  transition`}
                      >
                        {enabled ? <MoonIcon /> : <SunIcon />}
                      </span>
                    </Switch>
                    Dark Mode
                  </div>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
