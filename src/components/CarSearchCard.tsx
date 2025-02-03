import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Combobox } from "@/components/BrandCB"
import { Search } from "@/lib/search/search"
import { SearchIcon } from "lucide-react"

export function CarSearchCard() {
    return (
        <div className="mb-20">
            <Card className="w-80 h-fit border-dashed border-gray-800">
                <CardHeader>
                    
                    <CardTitle className="text-lg font-bold">
                        <SearchIcon className="size-7  display: inline-block"/> Keresés
                    </CardTitle>
                    
                </CardHeader>
                <CardContent>
                    <div className="mb-6">
                        <Label htmlFor="email">Márka</Label>
                        <br />
                        <Combobox/>
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="email">Modell</Label>
                        <br />
                        <Combobox/>
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="email">Modell</Label>
                        <br />
                        <Combobox/>
                    </div>
                    <p>01</p>
                    <p>02</p>
                    <p>03</p>
                    <p>04</p>               
                    <p>05</p>             
                    <p>06</p>                    
                    <p>07</p>
                    <p>08</p>
                    <p>09</p>
                    <p>10</p>
                    <p>11</p>               
                    <p>12</p>             
                    <p>13</p>                    
                    <p>1</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>               
                    <p>01</p>             
                    <p>01</p>                    
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>               
                    <p>01</p>             
                    <p>01</p>                    
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>               
                    <p>01</p>             
                    <p>01</p>                    
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>               
                    <p>01</p>             
                    <p>01</p>                    
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>               
                    <p>01</p>             
                    <p>01</p>                    
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>               
                    <p>01</p>             
                    <p>01</p>                    
                    <p>01</p>


                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <p>© 2025 Körpörgő Autókereskedés™.</p>
                </CardFooter>
            </Card>
        </div>
    )
}