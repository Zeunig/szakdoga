"use client"

import * as React from "react"
import { Check, ChevronsUpDown, GridIcon, Menu, RowsIcon, Search, TextCursorInputIcon, ViewIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Command } from "../ui/command"


export default function SMGR3() {
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
                    ------Content #1 <br />
                    ------Content #2 <br />
                    ------Content #3 <br />
                    ------Content #4 <br />
                    ------Content #5 <br />
                    ------Content #6 <br />
                </Command>
            </PopoverContent>
        </Popover>
    )
}

