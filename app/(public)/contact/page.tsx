import type { Metadata } from "next"

export default function ContactPage () {
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}

export const metadata: Metadata = {
    title:"Contact Page",
    description: "This is the contact company´s page",
    keywords: ['Contact Page', 'email','phone','...']
};


