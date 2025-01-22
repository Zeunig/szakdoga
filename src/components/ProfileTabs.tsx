import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"

export default function ProfileTabs() {
    return (
        <div className="h-80 grid justify-items-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8                         bg-red-400">
            
            <Tabs defaultValue="login" className="w-[400px]">

                <TabsList className="grid grid-cols-4">
                    <TabsTrigger value="profile">Progil</TabsTrigger>
                    <TabsTrigger value="settings">Regisztráció</TabsTrigger>
                    <TabsTrigger value="cars">Bejelentkezés</TabsTrigger>
                    <TabsTrigger value="TBD">Disabled</TabsTrigger>
                </TabsList>


                <TabsContent value="login">
                    <Card>

                        <CardHeader>

                            <CardTitle>Bejelentkezés</CardTitle>
                            <CardDescription>
                                Add meg a fiókod E-mail címét illetve jelszavát.
                            </CardDescription>

                        </CardHeader>

                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">E-mail</Label>
                                <Input id="email" type="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Jelszó</Label>
                                <Input id="password" type="password"/>
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button>Bejelentkezés</Button>
                        </CardFooter>

                    </Card>
                </TabsContent>

                
                <TabsContent value="register">
                    <Card>
                                      
                        <CardHeader>

                            <CardTitle>Regisztráció</CardTitle>
                            <CardDescription>
                                Nincs még fiókod? Csinálj egyet!
                            </CardDescription>

                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button>Fiók létrehozása</Button>
                        </CardFooter>

                    </Card>
                </TabsContent>
            </Tabs>

        </div>
    )
}