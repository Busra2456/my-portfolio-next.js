import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const roboto = Roboto({
  weight : ['400','500','700','900'],
  subsets:["latin"] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:"My Portfolio",
    template:"%s | My Portfolio"
  },
  description: "Super Powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}
          ${roboto.className} antialiased`}
      >
       <Navbar/>
        <div className="">
          {children}

        </div>
      
        <footer className="bg-fuchsia-700 p-5">This is footer</footer>
      </body>
    </html>
  );
}
