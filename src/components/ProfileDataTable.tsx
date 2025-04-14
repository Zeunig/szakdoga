import { Cog,Trash} from "lucide-react";
import { Badge } from "./ui/badge";

export default function ProfileDataTable(){
    return(
        <table id="filter-table">
    <thead>
        <tr>
            <th>
                <span className="flex items-center">
                    Márka
                    <svg className="w-8 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span className="flex items-center">
                    Modell
                    <svg className="w-8 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span className="flex items-center">
                    Ár
                    <svg className="w-8 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span className="flex items-center">
                    Akciós ár
                    <svg className="w-8  h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span className="flex items-center">
                    Státus
                    <svg className="w-8 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span className="flex items-center">
                     Szerkesztés
                </span>
            </th>
        </tr>
    </thead>
    <tbody>

        <tr className="border-2 border-gray-400">
            <td className="font-medium text-gray-900 whitespace-nowrap "> {"Volkswagen"} </td>
            <td> {"Golf"} </td>
            <td> {"12 000 000"}Ft </td>
            <td className="font-semibold text-cyan-700">{"10 000 000"}Ft </td>
            <td> <Badge className="bg-orange-700">AKTÍV</Badge> </td>
            <td> <button> <Cog/> </button> <button> <Trash/> </button> </td>
        </tr>

        <tr className="border-2 border-gray-400">
            <td className="font-medium text-gray-900 whitespace-nowrap "> {"Volkswagen"} </td>
            <td> {"Golf"} </td>
            <td> {"12 000 000"}Ft </td>
            <td className="font-semibold text-cyan-700">{"10 000 000"}Ft </td>
            <td> <Badge className="bg-orange-700">AKTÍV</Badge> </td>
            <td> <button> <Cog/> </button> <button> <Trash/> </button> </td>
        </tr>

        <tr className="border-2 border-gray-400">
            <td className="font-medium text-gray-900 whitespace-nowrap "> {"Volkswagen"} </td>
            <td> {"Golf"} </td>
            <td> {"12 000 000"}Ft </td>
            <td className="font-semibold text-cyan-700">{"10 000 000"}Ft </td>
            <td> <Badge className="bg-orange-700">AKTÍV</Badge> </td>
            <td> <button> <Cog/> </button> <button> <Trash/> </button> </td>
        </tr>
        
    </tbody>
</table>
    )
}