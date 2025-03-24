import {MaterialType} from "./types"
import getData from '@/lib/helpers/getData'
import Title from "@/lib/components/typo/Title"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const res = await fetch('http://localhost:3001/material',{next:{revalidate:10}})
    const material:MaterialType[] = await res.json()
    console.log(material)
    return (<>
    <Title>Matériel</Title>
    {/* <Header /> */}
    <main className="lg:w-5xl mx-auto my-5">{children}</main>
    </>
  );
}
