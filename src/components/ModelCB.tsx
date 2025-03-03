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
import { ISortedCarSelection } from "@/app/jobs/carCounter/route"
 
const make = [
  {value: "01|ford",label: "Ford",},
  {value: "audi",label: "Audi",},
  {value: "bmw",label: "BMW",},
  {value: "mb",label: "Mercedes-Benz",},
  {value: "amg",label: "Mercedes-AMG",},
  {value: "maybach",label: "Mercedes-Maybach",},
]
const ford = [
  {value: "ford",label: "Ford",},
  {value: "audi",label: "Audi",},
  {value: "bmw",label: "BMW",},
  {value: "mb",label: "Mercedes-Benz",},
  {value: "amg",label: "Mercedes-AMG",},
  {value: "maybach",label: "Mercedes-Maybach",},
]

 
export function ModelCB({car_selection, selectedBrand}: {car_selection: ISortedCarSelection[], selectedBrand: string}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  let cars = Object.values(car_selection);
  console.log(selectedBrand);
  console.log(cars);
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
            ? cars.find((car) => car.brand === selectedBrand)?.models.find((model) => model.model === value)?.model
            : <Search/>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Írja ide..." />
          <CommandList>
            <CommandEmpty>Nincs találat.</CommandEmpty>
              {cars.filter((car) => car.brand === selectedBrand).map((brand) => {
                let a = (<CommandGroup>
                  {
                    brand.models.map((model) => (
                      <CommandItem
                        key={model.model}
                        value={model.model}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === model.model ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {`${model.model} (${model.count})`}
                      </CommandItem>
                    ))
                  }
                </CommandGroup>);
                return a;
              })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}