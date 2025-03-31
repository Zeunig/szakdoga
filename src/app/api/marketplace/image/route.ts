import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";


export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    let extension = file.name.split(".").at(-1) as string;
    const id = [...crypto.getRandomValues(new Uint8Array(20))].map(m=>('0'+m.toString(16)).slice(-2)).join('');
    const file_name = id + "." + extension;
    if(!["png","jpg","jpeg","webp"].includes(extension)) {
        return NextResponse.json({"success": false, "error":"Érvénytelen fájl"},{"status":400});
    }
    try {
        let data = await file.bytes();
        await writeFile(path.join(process.cwd(), "public/car/",file_name),data).catch((err) => {
            console.error(err);
            return NextResponse.json({"success": false, "error":`Nem működött a fájlfeltöltés. Kérjük, próbálja meg újra később!`},{"status":500});
        });
    }catch(err) {
        console.error(err);
        return NextResponse.json({"success": false, "error":`Nem működött a fájlfeltöltés. Kérjük, próbálja meg újra később!`},{"status":500});
    }
    return NextResponse.json({"success":true,"image_id": id},{"status":200});
}


/*
{
    "image_url": string
}
*/
export async function DELETE(req: NextRequest) {

}