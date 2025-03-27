import "./globals.css";
import "./index.css";
import "../components/css/hover-min.css";
import { Toaster } from "@/components/ui/toaster";

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
        <body>{children}<Toaster /></body> 
        <link rel="icon" href="/logo.png"/>
        
      </html>
      
    )
  }
