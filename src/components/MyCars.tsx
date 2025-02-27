import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { EditIcon, Trash } from "lucide-react"

export default function MyCars() {
    return (
        <div>
            <Card className="w-72 h-90 border-dashed border-gray-800  ">
                <CardHeader>
                    <img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/55034/2025-Honda-Civic-front_55034_032_1816x735_RE_cropped.png" alt="CarIMG" className="w-60 h-30" />
                    <CardTitle>Mercedes-Benz C200</CardTitle>
                    <CardDescription className="font-mono text-xs">|888,888km|888le|8888cc|</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="diplay: inline font-bold">888 888 888 Ft</p><p className="diplay: inline text-gray-400"> - Ár </p>
                    <br />
                    <p className="diplay: inline font-bold text-blue-600">888 888 888 Ft</p><p className="diplay: inline text-gray-400"> - Akciós ár</p> 
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <button>
                        <EditIcon className="text-blue-600" />
                    </button>
                    <button>
                        <Trash className="text-red-600" />
                    </button>

                </CardFooter>
            </Card>
        </div>
    )
}