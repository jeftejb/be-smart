import { ClerkProvider } from "@clerk/nextjs"
import{Inter} from "next/font/google"

import'../globals.css'
import Nav from "@/components/nav"
export const metadata = {
    title:'Social Colne', 
    description:'social clone com Next.js 13',
    
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
                    <div className="w-full flex justify-center items-center min-h-screen">
                    {children}
                    </div>
                  </body>
                </html>

              </ClerkProvider>
    )
}
