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
            <title>title tuah</title>
        </head>
        <body>{children}</body>
      </html>
    )
  }