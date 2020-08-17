import React from "react";
import RightSideBar from "./inc/_rightSideBar";
import Sidebar from "./inc/_sidebar";
import '../../assets/back/css/style.scoped.css'




export default function AdminLayout({children}){

    return (
        <>
            <RightSideBar/>
            <Sidebar/>
            <section className="content">
                {children}
            </section>
        </>


    )
}

