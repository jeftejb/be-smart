import FormCadModulos from '@/components/FormCadModulo'
import { CursoOne } from '@/lib/actions/cursos.actions'
import React from 'react'

 const getData = async (idCurso:string)=>{
       try {
            const professores = await CursoOne(idCurso)
            return{data:professores}
       } catch (error) {
        
       }
 } 

 async function page({params}:{params:{id:string}}) {
  const idCurso = params.id
  const professores:any = await getData(idCurso)

  return (
    <div className=''>
      <FormCadModulos idCurso={idCurso} professores={JSON.stringify(professores.data)} imagem={""} nome={""} descricao={""}/>
    </div>
  )
}

export default page
