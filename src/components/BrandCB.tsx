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


export function BrandCB({car_selection, setSelectedBrand, onInputChange}: {car_selection: ISortedCarSelection[], setSelectedBrand: React.Dispatch<React.SetStateAction<string>>, onInputChange: (params: any, param: any) => any}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  let cars = Object.values(car_selection);
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
            ? cars.find((car) => car.brand === value)?.brand
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
              {cars.map((car) => (
                <CommandItem
                  key={car.brand}
                  value={car.brand}
                  onSelect={(currentValue) => {
                    setSelectedBrand(car.brand);
                    onInputChange(car.brand, "brand");
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === car.brand ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {`${car.brand} (${car.totalCount})`}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}