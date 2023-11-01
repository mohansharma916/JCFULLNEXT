import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import Link from "next/link";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useAppSelector } from "@/src/hooks";
import { useQuery } from "@apollo/client";
import { GetUser } from "@/src/apollo/queries/auth";

const products = [
  {
    name: "Beaches",
    description:
      "Relax on sunny shores, listen to the soothing waves, and play in the sand at beautiful beach spots.",
    href: "#",
    icon: "/media/sunset.png",
  },
  {
    name: "Mountains Trekking",
    description:
      "Hike through big, tall mountains and enjoy the great outdoors.",
    href: "#",
    icon: "/media/trekking.png",
  },
  {
    name: "Snow Mountains",
    description:
      "Have fun in the snow on tall mountains with activities like skiing and snowboarding.",
    href: "#",
    icon: "/media/winter.png",
  },
  {
    name: "Temples",
    description: "Connect with third-party tools",
    href: "#",
    icon: "/media/temples.png",
  },
  {
    name: "Party Trips",
    description:
      "Go to places with lots of music and fun to dance, have a blast, and make memories with friends.",
    href: "#",
    icon: "/media/dance.png",
  },
];
const callsToAction = [
  { name: "See All", href: "/trips", icon: PlayCircleIcon },
  { name: "Request A Destination", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { loading, data, error } = useQuery(GetUser);

  if (loading) {
    <p>Loading......</p>;
  }

  // console.log("user", userResp.data.me);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 xl:px-8 lg:px-8"
        aria-label="Global"
      >
        <div className="flex xl:flex-1 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Journey Capturer</span>
            <img className="h-12 w-auto" src="/media/TJC.png" alt="" />
          </Link>
        </div>
        <div className="flex md:hidden sm:hidden xl:hidden lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden xl:flex xl:gap-x-12 lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Domestic Trips
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          src={item.icon}
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                        {/* <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        /> */}
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            International Trips (Coming Soon)
          </Link>

          <Link
            href="/aboutUs"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Career
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Blogs
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          ></Link>
        </Popover.Group>
        {data?.me ? (
          <>
            {" "}
            <Link href="/profile">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
            </Link>
          </>
        ) : (
          <div className="hidden xl:flex xl:flex-1 xl:justify-end lg:flex lg:flex-1 lg:justify-end">
            <Link
              className="text-sm font-semibold leading-6 hover:border-2 p-2 hover:rounded-2xl text-gray-900 mr-4 bg-transparent hover:bg-[#FAA935]"
              href="/auth/login"
            >
              {" "}
              Log in <span aria-hidden="true"></span>
            </Link>

            <Link
              className="text-sm font-semibold leading-6 hover:border-2 p-2 hover:rounded-2xl text-gray-900 mr-4 bg-transparent hover:bg-[#FAA935]"
              href="/auth/register"
            >
              {" "}
              Register Here <span aria-hidden="true"></span>
            </Link>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="xl:hidden lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/media/TJC.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Domestic Trips
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  International Trips (Coming Soon)
                </Link>
                <Link
                  href="/aboutUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Career
                </Link>
                <Link
                  href="/blogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blogs
                </Link>
              </div>

              <div className="py-6">
                <Link
                  href="/auth/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/auth/register"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
