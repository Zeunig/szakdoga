import "./globals.css";
import "./index.css";
import "../components/css/hover-min.css";

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
        <body>{children}</body>
        <link rel="icon" href="/logo.png"/>
        
      </html>
      
    )
  }
