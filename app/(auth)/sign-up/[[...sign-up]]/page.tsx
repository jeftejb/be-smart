import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
  <div className="flex flex-col w-[100%]  items-center">
  <h1 className="text-[18px] font-bold text-green-600 uppercase mb-4">Matricula</h1>
  <SignUp />
  </div>
  )
}