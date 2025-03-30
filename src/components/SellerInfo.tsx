import { Report } from "@/app/reports/page";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronDown, Mail, MapIcon, Phone } from "lucide-react";

export default function SellerInfo({ reports }: { reports: Report[] }) {
    return (

        <Collapsible>
            <CollapsibleTrigger className=""><p className="text-xl inline-block" >Eladó adatai <ChevronDown className="inline-block" /></p></CollapsibleTrigger>
            <CollapsibleContent>
                {reports.map((report) => (



                    <div>
                        <hr className="w-full h-px mx-auto mt-3  mb-2 bg-slate-400 border-0" />
                        <p className="font-bold ml-3 text-blue-600 text-lg "> Neve:{ } </p>
                        <p className="font-bold ml-3"> <Mail className="inline-block text-blue-600" />: {report.car.user.name} </p>
                        <p className="font-bold ml-3"> <Phone className="inline-block text-blue-600" />: { } </p>
                        <p className="font-bold ml-3"> <MapIcon className="inline-block text-blue-600" />: { } </p>
                    </div>
                ))}
            </CollapsibleContent>
        </Collapsible>

    )
}
