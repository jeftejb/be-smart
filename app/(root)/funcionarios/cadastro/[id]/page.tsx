import FormCadFun from "@/components/FormCadFun"
import Link from "next/link"

export default function Pagamentos({params}:{params:{id:string}}){

    return(
        <section className="relative w-[100%] my-52 items-center text-center " >
<div data-aos='fade-up'>
    <h1 className="font-bold uppercase text-5xl p-6" >Be-Smart</h1>
    <p className="font-bold uppercase ">Cadastro de funcionarios</p>
</div>

<section>

    <div>
        <FormCadFun id={params.id}/>
    </div>
</section>

</section>

    )
}




