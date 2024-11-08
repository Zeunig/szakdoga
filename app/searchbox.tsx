import "./searchbox.css"
import { Button } from '@headlessui/react'
const car_brands = ["Audi", "Opel", "Renault"]


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
                <Button className="inline-flex justify-center flex-grow gap-2 mx-6 p-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                   Keresés
                </Button>
            </div>
            <h1 className="text-2xl font-semibold text-center">Keresés tulajdonságok alapján</h1>
            <div>   
                <div className="flex flex-row w-full">
                    
                </div>
            </div>
        </div>
      </div>
    );
}