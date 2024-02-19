"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/Sidebar";
import { usePathname } from "next/navigation";
import { DataContextProvider } from "@/context/DataContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathNames = usePathname()


  return (
    <html lang="en">
      <body className={inter.className}>
        <DataContextProvider>
        <div className="app">

        <div className="grid grid-cols-1 lg:grid-cols-4">
          
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3">{children}</div>
        </div>
        </div>
        
        </DataContextProvider>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
