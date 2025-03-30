import {Report} from "@/app/reports/page";

export default function ReportOverviewPage({reports} : {reports: Report[]}) {
    return (
        <table border={1}>
            <tr>
                <th>Autó ID</th>
                <th>Kép</th>
                <th>Név</th>
                <th>Indok</th>
                <th>Jelentő IP</th>
                <th>Műveletek</th>
            </tr>

            {reports.map((report) => (
                <tr>
                    <td>{report.car.id}</td>
                    <td><img src={report.car.car_image_relation[0].image_url} alt="" width="196px" /></td>
                    <td>{report.car.user.name}</td>
                    <td>{report.reason}</td>
                    <td>{report.reporter_ip}</td>
                    <td><button>Hirdetés törlése</button><button>Hirdetés törlése és felhasználó kitiltása</button></td>
                </tr>
            ))}
        </table>
    )
}
