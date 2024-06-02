import { ClerkProvider } from "@clerk/nextjs"
import{Inter} from "next/font/google"

import'../globals.css'
import Nav from "@/components/nav"
export const metadata = {
    title:'Be-Smart', 
    description:'Venha ser um "Smart", com a familia do Be-Smart',
    
}
const inter = Inter({subsets:["latin"]})

export default function RootLayout({
    children
}: {
    children:React.ReactNode
}) {
    return(
              <ClerkProvider>
                <html lang="pt-br">
                  <body className={`${inter.className} bg-dark-1`}>
                  <Nav/>
                    <div className="w-full flex justify-center lg:mt-[5rem] md:mt-[3rem]  max-sm:mt-[8rem] items-center flex-col">
                    {children}
                    </div>
                  </body>
                </html>

              </ClerkProvider>
    )
}
