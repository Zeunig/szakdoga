import "./globals.css";
import "./index.css";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (

      <html lang="en">
        <head>
        
        </head>
        <body>{children}</body>
        <link rel="icon" href="/logo.png" />
        
      </html>
      
    )
  }
