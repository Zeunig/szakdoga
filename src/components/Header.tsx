"use server";


import { headers } from "next/headers";
import { ArrowDown, ChevronDown, Cross, LogOutIcon, Menu, Plus, UserIcon } from "lucide-react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Separator } from "@radix-ui/react-context-menu";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

/*async function MyProfile() {
  if (headersList.get("cookie")?.toString().includes("auth=")) {
    return (
      <div className="flex items-center lg:order-2">
<a href="/profile" className="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
      </a>
      </div>
    );
  }
  return (
    <div className="flex items-center lg:order-2">
  <a href="/auth" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Bejelentkezés/Regisztráció</a>
      
      <HeaderBTN/>

    </div>

  );
}*/

export async function Header() {
  const headersList = await headers();

  return (
    <header className="mt-2 border-b-2 border-slate-300">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center  hvr-icon-spin hvr-grow">
            <img src="/logo.png" className="mr-3 h-6 sm:h-9 hvr-icon inline-block" alt="KPAK Logo" />
            <img src="/title.png" className="inline-block" alt="KPAK Title" />
          </a>


          {/*Logged in users*/}

          {headersList.get("cookie")?.toString().includes("auth=") && <div className="flex items-center lg:order-2 ">
            <div className="mr-8  h-10 content-center w-24 text-center bg-blue-100 rounded-lg hvr-icon-fade">
              <Popover>
                <PopoverTrigger className=""><p className="inline-block text-blue-600 hvr-icon">Fiókom</p> <ChevronDown className="inline-block size-5 hvr-icon" /> </PopoverTrigger>
                <PopoverContent className="w-fit  shadow-none mr-12 rounded-none">
                  <div className="grid">
                    <a href="/profil"> Fiókom kezelése</a>
                    <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                    <a href="/auth/logout" className="text-red-500">Kijelentkezés</a>
                    <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                  
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <button className="bg-blue-600 rounded-lg   lg:h-10 lg:w-52 text-white font-bold mr-5 text-center content-center hover:scale-110 hover:transition-transform hover:duration-300 duration-300">
              <a href="/feltoltes">
                <Plus className="size-7  hidden lg:inline-block" /><p className="hidden lg:inline-block">Hirdetés feltöltése</p>
              </a>
            </button>
            
            <div className="lg:hidden">
              <Sheet >
                <SheetTrigger><Menu className="size-6" /></SheetTrigger>
                <SheetContent className="w-[200px]">
                  <SheetHeader>
                    <SheetTitle className="h-5"></SheetTitle>
                    <SheetDescription className="text-lg">
                      <hr className="w-[150px] h-px mx-auto mt-5  mb-2 bg-slate-400 border-0" />
                      <button className="hover:scale-125"><a href="/">Főoldal</a></button>
                      <br />
                      <button className="hover:scale-125"><a href="/cars">Autóink</a></button>
                      <br />
                      <hr className="w-[150px] h-px mx-auto mt-5  mb-2 bg-slate-400 border-0" />
                      <div className="grid grid-cols-5">

                        <a href="/profil" className="inline-block col-start-2">
                          <UserIcon className="text-blue-600 hover:scale-150" />
                        </a>
                        <a href="/auth/logout" className="inline-block col-start-4">
                          <LogOutIcon className="text-red-500 hover:scale-150" />
                        </a>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>



          </div>}

          {/*Logged in users end*/}


          {/*Logged out users*/}

          {!(headersList.get("cookie")?.toString().includes("auth=")) && <div className="flex items-center lg:order-2">

            <a href="/auth" className="hidden lg:block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 hvr-underline-from-center hvr-icon-grow"><ArrowRightEndOnRectangleIcon className="size-7 inline-block lg:hidden text-blue-600 hvr-icon" />  <p className="inline-block hidden lg:block">Bejelentkezés/Regisztráció</p></a>
            
            <button className="bg-blue-600 rounded-lg   lg:h-10 lg:w-52 text-white font-bold mr-5 text-center content-center hvr-glow hvr-icon-grow">
              <a href="/feltoltes">
                <Plus className="size-7 inline-block hvr-icon" /><p className="hidden lg:inline-block">Hirdetés feltöltése</p>
              </a>
            </button>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger><Menu className="size-6" /></SheetTrigger>
                <SheetContent className="w-[200px]">
                  <SheetHeader>
                    <SheetTitle className="h-5"></SheetTitle>
                    <SheetDescription className="text-lg">
                      <hr className="w-[150px] h-px mx-auto mt-5  mb-2 bg-slate-400 border-0" />
                      <button className="hvr-underline-from-left"><a href="/">Főoldal</a></button>
                      <br />
                      <button className="hvr-underline-from-left"><a href="/cars">Autóink</a></button>
                      <br />
                      <hr className="w-[150px] h-px mx-auto mt-5  mb-2 bg-slate-400 border-0" />
                      <button className="bg-blue-600 rounded-lg   h-10 w-36 text-white font-bold mr-5 text-center content-center hvr-grow">
                        <a href="/feltoltes">
                          <p className="text-sm">Hirdetés feltöltése</p>
                        </a>
                      </button>

                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>

          </div>}
          {/*Logged out users end*/}


          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
            </ul>
          </div>
        </div>
      </nav>

    </header>

  )
}