import type { Metadata } from "next";

export const metadata : Metadata ={
    title:'Contact',
    description:"Contact",
    keywords: "contact"
};

export default function ContactPage(){
    return <>
        <span>Contact</span>
    </>
}