import Estudante from "@/components/Estudante";

export default function PagamentoAlunos({params}:{params:{id:string}}){
    const id = params.id;
    return(
        <section className="relative flex w-full h-full top-0 left-0">


           <section className=" relative flex flex-col w-full mt-[25px] items-center justify-center mx-5 py-10">
            <h1 className="text-white my-[100px]" >Verificar matriculas de alunos</h1>


            <div className="relative flex flex-col flex-1 w-full gap-3 items-center justify-center">
                <div className=" flex w-full  items-center justify-center ">
                <form action="" method="post" className="flex w-full max-sm:flex-col items-center justify-center ">
                    <input type="search" className="px-[30px] py-[4px] bg-transparent rounded-2xl border-2 border-rose-400"  name="" id="" />
                    <button type="submit"  className="px-[14px] max-sm:px-[8px] max-sm:py-[1px] max-sm:mt-4 max-sm:w-[50%]  py-[4px] ml-3 border-2 border-rose-400 rounded-3xl ">Pesquisar</button>
                </form>
                </div>

                <div className=" grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 w-full mt-[25px] px-8  items-center justify-center">
                    <Estudante id={id} nivel={"alto"} />
                    <Estudante id={id} nivel={"alto"} />
                    <Estudante id={id} nivel={"alto"} />
                    <Estudante id={id} nivel={"alto"} />
                     <Estudante id={id} nivel={"alto"} />
                    <Estudante id={id} nivel={"alto"} />
                    <Estudante id={id} nivel={"alto"} />
                    <Estudante id={id} nivel={"alto"} />

                </div>

            </div>
           </section>

        </section>
    )
}