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
    <div className="w-full px-6 dark:bg-black-400 sticky top-0 backdrop-blur-md z-20">
      <div className="flex justify-between border-gray-100 py-2 gap-3">
        <div className="flex justify-start">
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

        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-4">
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
          <p className="whitespace-nowrap text-base font-medium text-gray-500">
            Dagupan City, Pangasinan
          </p>
        </div>
      </div>
    </div>
  );
}
