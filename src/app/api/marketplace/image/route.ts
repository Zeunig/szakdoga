import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";


export async function POST(req: NextRequest) {
    const formData = await req.formData();
    console.log(formData);
    const file = formData.get("file") as File;
    console.log(file);
    let extension = file.name.split(".").at(-1) as string;
    const id = [...crypto.getRandomValues(new Uint8Array(20))].map(m=>('0'+m.toString(16)).slice(-2)).join('');
    const file_name = id + "." + extension;
    if(!["png","jpg","jpeg","webp"].includes(extension)) {
        return NextResponse.json({"error":"Invalid file type"},{"status":400});
    }
    try {
        let data = await file.bytes();
        await writeFile(path.join(process.cwd(), "public/car/",file_name),data).catch((err) => {
            console.log(err);
            return NextResponse.json({"error":`Something went wrong while uploading file : ${err}`},{"status":400});
        });
    }catch(err) {

    }finally {
        console.log("hawk tuah");
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