"use client";

import {Report} from "@/app/reports/page";
import axios from "axios";

export default function ReportOverviewPage({reports} : {reports: Report[]}) {
    return (
        <table border={1}>
            <thead>
            <tr>
                <th>Autó ID</th>
                <th>Kép</th>
                <th>Név</th>
                <th>Indok</th>
                <th>Jelentő IP</th>
                <th>Műveletek</th>
            </tr>
            </thead>
            
            <tbody>
            {reports.map((report) => (
                <tr key={report.car.id}>
                    <td>{report.car.id}</td>
                    <td><img src={report.car.car_image_relation[0].image_url} alt="" width="196px" /></td>
                    <td>{report.car.user.name}</td>
                    <td>{report.reason}</td>
                    <td>{report.reporter_ip}</td>
                    <td>
                        <button onClick={() => {axios.delete(`/api/cars/${report.car.id}`);reports.map((r) => {report.car.id !== r.car.id})}}>Hirdetés törlése</button>
                    <button onClick={() => {axios.post(`/api/admin/ban`, {"user_id": report.car.seller_id});reports.map((r) => {report.car.id !== r.car.id})}}>Hirdetés törlése és felhasználó kitiltása</button></td>
                </tr>
            ))}
            </tbody>
            
        </table>
    )
}
