import type { Metadata } from "next";

export const metadata : Metadata ={
    title:'About',
    description:"About Page",
    keywords: "about page"
};


export default function AboutPage(){
    return <>
        <span>About</span>
    </>
}