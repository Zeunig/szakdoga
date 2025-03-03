import Image from "next/image";

export const BigImageViewer = ({imagePath}: {imagePath: string}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", position: "fixed", zIndex: 999, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)"}}>
            {/*<img src={imagePath} style={{maxWidth: "50%", objectFit: "contain"}} alt="" />*/}
            <Image src={imagePath}  style={{maxWidth: "50%", objectFit: "contain", inset: "unset"}} alt="" fill={true}/>
            {/*<div style={{maxWidth: "50vh", maxHeight: "50vh", minWidth: "25vh", minHeight: "25vh", position: "fixed"}}>
                <Image src={imagePath}  fill={true} alt="Picture of the author" />
            </div>*/}
        </div>
    );
};