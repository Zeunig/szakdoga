"use client"

import * as React from "react"
import { Check, ChevronsUpDown, GridIcon, Menu, RowsIcon, Search, TextCursorInputIcon, ViewIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export default function HeaderBTN() {
    const [open, setOpen] = React.useState(false)

    return (

        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="block lg:hidden">
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-fit justify-between"
                >
                    <Menu />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="mt-2  w-[120px] p-0">
                <Command className="">
                    <button className="ml-[9px] w-[100px] border-2 border-gray-300 rounded-lg mt-2 mb-2 transform transition duration-250 hover:scale-110 hover:bg-blue-400">
                        <a href="/">HOME</a>
                    </button>
                    <button className="ml-[9px] w-[100px] border-2 border-gray-300 rounded-lg mb-2 transform transition duration-250 hover:scale-110 hover:bg-blue-400">
                        <a href="/upload">UPLOAD</a>
                    </button>
                    <button className="ml-[9px] w-[100px] border-2 border-gray-300 rounded-lg mb-2 transform transition duration-250 hover:scale-110 hover:bg-blue-400">
                        <a href="/search/cars">CARS</a>
                    </button>
                    <button className="ml-[9px] w-[100px] border-2 border-gray-300 rounded-lg mb-2 transform transition duration-250 hover:scale-110 hover:bg-blue-400">
                        <a href="/test">TEST</a>
                    </button>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

