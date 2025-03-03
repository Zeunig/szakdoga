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


export function BrandCB(car_selection: ISortedCarSelection[]) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [selectedBrandIndex, setSelectedBrandIndex] = React.useState(-1);
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
            ? make.find((make) => make.value === value)?.label
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