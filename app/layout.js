import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Iowan Old Style" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inknut Antiqua"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inria Serif"
                />
                <div className='layoutFooter'>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
