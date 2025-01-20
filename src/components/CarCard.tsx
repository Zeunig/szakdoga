import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
export function CarCard() {
    return (
        <div className="mb-20">
            <Card className="w-80 h-80 ">
                <CardHeader>
                    <img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/55034/2025-Honda-Civic-front_55034_032_1816x735_RE_cropped.png" alt="CarIMG" />
                    <CardTitle>Brand - Model</CardTitle>
                    <CardDescription className="font-mono text-xs">|888,888km|888le|8888cc|</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa distinctio vero, molestiae non aut libero iusto? </p>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <p>© 2025 Körpörgő Autókereskedés™.</p>
                </CardFooter>
            </Card>
        </div>
    )
}