"use client";

import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"
import { useState } from "react";
import Alert from "./Alert";
export interface IAlert {
    alert_type: string,
    title: string,
    message: string
}

export default function AuthTabs() {
    let [registerAlert, setRegisterAlert] = useState([] as IAlert[]);
    function parseResponse(json: any) {
        if(json["success"] === true) {
            setRegisterAlert([{alert_type: "success", title: "Sikeres regisztráció", message: "Hamarosan átirányítunk a főoldalra"}])
            setTimeout(() => {
                window.location.href = `http${window.location.host.includes("localhost:") ? "" : "s"}://${window.location.host}`;
            },2000);
        }else {
            setRegisterAlert([{alert_type: "danger", title: "Hiba", message: json["message"] as string}]);
            console.log(registerAlert);
            console.error(json);
        }
    }
    function parseResponseLogin(json: any) {
        if(json["success"] === true) {
            setRegisterAlert([{alert_type: "success", title: "Sikeres bejelentkezés", message: "Hamarosan átirányítunk a főoldalra"}])
            setTimeout(() => {
                window.location.href = `http${window.location.host.includes("localhost:") ? "" : "s"}://${window.location.host}`;
            },2000);
        }else {
            setRegisterAlert([{alert_type: "danger", title: "Hiba", message: json["message"] as string}]);
            console.log(registerAlert);
            console.error(json);
        }
    }
    async function login(formData: FormData) {
        fetch(`http${window.location.host.includes("localhost:") ? "" : "s"}://${window.location.host}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify(
                {
                    "username": formData.get("email"),
                    "password": formData.get("password")
                }
            )
        })
        .then(res => res.json()).then(json => parseResponseLogin(json));
    }
    async function register(formData: FormData) {
        let hcaptcha_response = document.getElementsByTagName("iframe")[0].getAttribute("data-hcaptcha-response");
        if (hcaptcha_response?.length === 0) {
            return;
        }
        fetch(`http${window.location.host.includes("localhost:") ? "" : "s"}://${window.location.host}/api/auth/register`, {
            method: "POST",
            body: JSON.stringify(
                {
                    "username": formData.get("name"),
                    "password": formData.get("password"),
                    "email": formData.get("email"),
                    "captcha": hcaptcha_response
                }
            )
        })
        .then(res => res.json()).then(json => parseResponse(json));
    }
    return (
        <div className="h-80 grid justify-items-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-red-400">
            
            <Tabs defaultValue="login" className="w-[400px]">

                <TabsList className="grid grid-cols-2  bg-blue-400 ">
                    <TabsTrigger value="login">Bejelentkezés</TabsTrigger>
                    <TabsTrigger value="register">Regisztráció</TabsTrigger>
                </TabsList>


                <TabsContent value="login" >
                    <Card className="border-2 border-blue-400">
<<<<<<< Updated upstream
                        <form action={login}>
                            <CardHeader >

                                <CardTitle>Bejelentkezés</CardTitle>
                                <CardDescription>
                                    Add meg a fiókod E-mail címét illetve jelszavát.
                                </CardDescription>

                            </CardHeader>

                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input id="email" type="email" name="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Jelszó</Label>
                                    <Input id="password" type="password" name="password"/>
                                </div>
                            </CardContent>

<<<<<<< Updated upstream
                            <CardFooter>
                                <Button>Bejelentkezés</Button>
                            </CardFooter>
                        </form>

=======
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
                            <Button type="submit">Bejelentkezés</Button>
                        </CardFooter>
                        </form>
>>>>>>> Stashed changes
                    </Card>
                </TabsContent>

                
                <TabsContent value="register">
                    <Card>
                        {
                            registerAlert.map(alert => (
                                <Alert alert_type={alert.alert_type} title={alert.title} message={alert.message}></Alert>
                            ))
                        }
                        <form action={register}>
                            <CardHeader>
                            <CardTitle>Regisztráció</CardTitle>
                            <CardDescription>
                                Nincs még fiókod? Csinálj egyet!
                            </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Név</Label>
                                <Input id="name" type="text" name="name" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">E-mail</Label>
                                <Input id="email" type="email" name="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Jelszó</Label>
                                <Input id="password" type="password" name="password"/>
                            </div>
                            <div className="h-captcha" data-sitekey="10000000-ffff-ffff-ffff-000000000001"></div>
                            <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
                            </CardContent>

                            <CardFooter>
                            <Button type="submit">Fiók létrehozása</Button>
                            </CardFooter>
                        </form>         

                    </Card>
                </TabsContent>
            </Tabs>

        </div>
    )
}