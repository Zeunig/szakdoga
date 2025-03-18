"use client"
 
import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"
 
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
import { ISortedCarSelection } from "@/app/jobs/carCounter/route"
 
const make = [
  {value: "ford",label: "Ford",},
  {value: "audi",label: "Audi",},
  {value: "bmw",label: "BMW",},
  {value: "mb",label: "Mercedes-Benz",},
  {value: "amg",label: "Mercedes-AMG",},
  {value: "maybach",label: "Mercedes-Maybach",},
]


export function CB({selection, setter}: {selection: string[], setter: React.Dispatch<React.SetStateAction<string[]>>}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? selection.find((selection) => selection === value)
            : <Search/>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Írja ide..." />
          <CommandList>
            <CommandEmpty>Nincs találat.</CommandEmpty>
            <CommandGroup>
              {selection.map((selection) => (
                <CommandItem
                  key={selection}
                  value={selection}
                  onSelect={(currentValue) => {
                    setter(selection)
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === selection ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {`${selection}`}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}