"use client";

import { Report } from "@/app/reports/page";
import axios from "axios";
import { Hammer, X } from "lucide-react";

export default function ReportOverviewPage({ reports }: { reports: Report[] }) {
    return (
        <div className="mx-5 mt-4 mb-10">
            <table className="w-full place-self-center text-center" border={1}>

                <thead className="bg-blue-200 border-b-4 border-blue-400 h-10">
                    <tr>
                        <th>Autó ID</th>
                        <th>Kép</th>
                        <th>Név</th>
                        <th>Indok</th>
                        <th>Jelentő IP</th>
                        <th>Műveletek</th>
                    </tr>
                </thead>





                <tbody className="">
                    {reports.map((report) => (
                        <tr key={report.car.id} className="odd:bg-blue-100 even:bg-blue-200 ">
                            <td className="">{report.car.id}</td>
                            <td className="bg-slate-900 bg-opacity-20 rounded-xl"><img src={report.car.car_image_relation[0].image_url} alt="" width="196px" className="place-self-center"/></td>
                            <td className="">{report.car.user.name}</td>
                            <td className="">{report.reason}</td>
                            <td className="0">{report.reporter_ip}</td>
                            <td className="">
                                <button onClick={() => { axios.delete(`/api/cars/${report.car.id}`); reports.map((r) => { report.car.id !== r.car.id }) }} className="mx-5 duration-300  hover:scale-125"> <X className="text-red-600"/> </button>

                                <button onClick={() => { axios.post(`/api/admin/ban`, { "user_id": report.car.seller_id }); reports.map((r) => { report.car.id !== r.car.id }) }} className="mx-5 duration-300 hover:scale-125"> <Hammer /> </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    )
}
