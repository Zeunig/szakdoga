"use client"
 
import * as React from "react"
import { Check, ChevronsUpDown, Search, TextCursorInputIcon, ViewIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
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
 
const make = [
  {value: "FWD",label: "Elsőkerék",},
  {value: "RWD",label: "Hátsókerks",},
  {value: "AWD",label: "Összkerék",},
  {value: "4WD",label: "4x4",},
]

 
export function DrivetypeCB() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[160px] justify-between"
        >
          {value
            ? make.find((make) => make.value === value)?.label
            : "Meghajtás fajtája"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Írja ide..." />
          <CommandList>
            <CommandEmpty>Nincs találat.</CommandEmpty>
            <CommandGroup>
              {make.map((make) => (
                <CommandItem
                  key={make.value}
                  value={make.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === make.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {make.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}