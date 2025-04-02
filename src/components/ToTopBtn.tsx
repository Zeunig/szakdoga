"use client"
import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";


export default function ToTopBtn({
    minHeight, // Height from which button will be visible
    scrollTo, // Height to go on scroll to top
    ...props
}: ButtonProps & { minHeight?: number; scrollTo?: number }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(document.documentElement.scrollTop >= (minHeight ?? 0));
        };

        onScroll();
        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll);
    }, [])

    return (

        <div className="place-self-end mr-2 hidden lg:block rounded-full ">
            {visible && (
                <Button 

                    onClick={() =>
                        window.scrollTo({
                            top: scrollTo ?? 0,
                            behavior: "smooth",
                        })
                    }
                    {...props}
                    
                />
                
            )}

        </div>
    );
}