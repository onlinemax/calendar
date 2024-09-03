import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./ui/components.module.css"
import "./globals.css";
import { roboto, serif} from "../public/fonts";
import AppIcon from "./ui/app-icon";
import clsx from "clsx";
export const metadata: Metadata = {
    description: "An elements quiz",
    title: "Elements",

}


export default function RootLayout({children}: { children: React.ReactNode}){
    return ( 
        <html lang="en">
            <body className={clsx(roboto.className, "bg-blue-300")}>
                <div id="sidebar" className="w-dvw h-16 flex flex-row items-center justify-between px-3 border-b-4">
                  <Link className={styles["focus-state"]} href="/" >
                    <div className="flex flex-row items-center">
                        <AppIcon type="beacker" className="size-10" />  
                        <span className={clsx(serif.className, "text-2xl")}>Element</span>
                    </div>
                  </Link>
                  <button className={clsx(" border-none hover:bg-slate-400", styles["focus-state"])} >
                    <AppIcon type="setting" className="size-10 fill-black" /> 
                  </button>
                </div>
                
                {children}
            </body>
        </html>
    );
}