'use client'
import { useState } from "react"
import "./searchbox.css"
import { Button, Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, ComboboxButton } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
const car_brands = [
    {id: "audi", name: "Audi"},
    {id: "opel", name: "Opel"},
    {id: "renault", name: "Renault"}
]

function ComboBox(props) {
    console.log(props.options);
    const [selected, setSelected] = useState(props.options[1])
    const [query, setQuery] = useState('')
    const filteredOptions =
    query === ''
      ? props.options
      : props.options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase())
        })
     console.log(props.isLong);
        return (
            <div className={"mx-auto h-2/4 p-3 " + (props.isLong ? "w-full" : "w-52")}>
            <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
                <div className="relative">
                <ComboboxInput
                    autoComplete="off"
                    className={clsx(
                    'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    displayValue={(option) => option?.name}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                </ComboboxButton>
                </div>

                <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx(
                    'w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}
                >
                {filteredOptions.map((option) => (
                    
                    <ComboboxOption
                    key={option.id}
                    value={option}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                    >
                    <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-white">{option.name}</div>
                    </ComboboxOption>
                ))}
                </ComboboxOptions>
            </Combobox>
            </div>
          )
}


export function SearchBox() {
    return (
      <div className="flex search_box flex-col md:h-3/6 h-4/6">
        <div className="flex md:flex-row flex-col justify-around w-full tabs">
          <div className="w-full highlighted"><h2 className="text-xl text-center">Autóvásárlás</h2></div>
          <div className="w-full"><h2 className="text-xl text-center">Autó eladás</h2></div>
          <div className="w-full"><h2 className="text-xl text-center">További lehetőségek</h2></div>
        </div>
        <div className="w-full h-2/4 flex flex-col p-1 md:p-2">
            <h1 className="text-2xl font-semibold text-center">Keresés kulcsszavak alapján</h1>
            <div className="w-full flex flex-row mt-3">
                <input type="text" id="small-input" className="float-left w-10/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                <Button className="inline-flex justify-center flex-grow gap-2 mx-3 md:mx-6 p-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                   Keresés
                </Button>
            </div>
            <h1 className="text-2xl font-semibold text-center">Keresés tulajdonságok alapján</h1>
            <div>   
                <div className="flex flex-row w-full">
                    <div>
                        <h3 className="ml-3">Márka</h3>
                        <ComboBox options={car_brands}/>
                    </div>
                    <div>
                        <h3 className="ml-3">Modell</h3>
                        <ComboBox options={car_brands}/>
                    </div>
                    <div>
                        <h3 className="ml-3">Üzemanyag</h3>
                        <ComboBox options={car_brands}/>
                    </div>
                    <div className="w-full">
                        <h3 className="ml-3">Tulajdonságok</h3>
                        <ComboBox options={car_brands} isLong={true}/>
                    </div>
                    
                    
                </div>
            </div>
        </div>
      </div>
    );
}