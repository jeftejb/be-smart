import FormCurso from "@/components/FormCurso"
import { fetchFuncionariosNomes } from "@/lib/actions/funcionarios.actions"

const getData = async ()=>{
    try {
        const dados = await fetchFuncionariosNomes()
        return{data:dados}
    } catch (error) {
        
    }
   
}

const page = async  ({params}:{params:{id:string}})=>{
const id= params.id
const dados:any = await getData()

    return(
        <div className="relative flex flex-col w-full h-full mt-60 p-10">

            <div className="flex w-[100%] flex-col bg-black rounded-lg items-center justify-center">
            <h1 className="text-center">Novo Curso</h1>

           <FormCurso id={id} items={JSON.stringify(dados?.data)} nome={""} imagem={""} descricao={""}/>
            </div>
        </div>
    )

}


export default page