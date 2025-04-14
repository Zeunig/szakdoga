import "./globals.css";
import "./index.css";
import "../components/css/hover-min.css";
import { Toaster } from "@/components/ui/toaster";
import ToTopBtn from "@/components/ToTopBtn";
import { ArrowBigUpDashIcon } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <head>
        <title>Körpörgő Autó Kereskedés</title>

      </head>
      <body>
      <div className="relative">
        {children}
        
          {/* Some content */}
          <ToTopBtn minHeight={40} scrollTo={10} className="fixed right-5 bottom-10 bg-blue-600 hover:bg-blue-400 duration-500 border-2 border-blue-600 rounded-full h-12 w-12  hvr-bob text-center hvr-icon-fade">
            <ArrowBigUpDashIcon className="place-self-center"/>
          </ToTopBtn>
        </div></body>
      <link rel="icon" href="/logo.png" />

    </html>

  )
}
