import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
export function CarCardHL(){
    return (
        <div className="mb-20">
            <Card className="w-80 h-90 border-dotted border-black bg-orange-400 bg-opacity-40">
                <CardHeader>
                    <img src="https://www.usnews.com/cmsmedia/4a/74/b121e9304fdab9561575404faefb/16-2024-chevrolet-corvette-angular-front-jmv.JPG" alt="CarIMG" className="w-70 h-25"  />
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