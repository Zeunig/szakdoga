import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Combobox } from "@/components/BrandCB"

export function CarSearchCard() {
    return (
        <div className="mb-20">
            <Card className="w-80 h-90 border-dashed border-gray-800  ">
                <CardHeader>
                    
                    <CardTitle>Brand - Model</CardTitle>
                    <CardDescription className="font-mono text-xs">|888,888km|888le|8888cc|</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-6">
                        <Label htmlFor="email">E-mail</Label>
                        <br />
                        <Combobox/>
                    </div>
                
                
                
                    <div className="mb-6">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" className="border-2 border-blue-400" />
                    </div>

                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <p>© 2025 Körpörgő Autókereskedés™.</p>
                </CardFooter>
            </Card>
        </div>
    )
}