import Link  from "next/link";
import "./globals.css";

export const metadata = {
  title: "My First Next App",
  description: "Generated by create next app",
  keywords: ["nextjs", "react", "app"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Navigation</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">services </Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
