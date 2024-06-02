import React from 'react'
import PerfilSaidaItem from './ui/PerfilSaidaItem'

function PerfisDeSaida() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
       <h1 className="titulos">
       <span className='text-white mr-1'>
            PERFIS DE SAIDA
            </span> 
             BE-
            <span className="text-[#80BF21]">
              SMART
            </span>
        </h1>

        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
             <div className=''>
                <PerfilSaidaItem 
                titulo={"Fluente em Inglês (ou em outro idioma estudado"} 
                texto={
                    " idioma estudado, capazes de se comunicar efetivamente em uma variedade de situações, tanto pessoais quanto profissionais. Eles têm uma compreensão sólida da gramática, vocabulário e pronúncia do idioma, e podem participar de conversas fluentes e expressar suas ideias de forma clara e precisa "
                    }/>
                <PerfilSaidaItem 
                titulo={"Preparado para Exames de Proficiência"} 
                texto={"Alunos que buscam certificação em exames de proficiência, como TOEFL, IELTS, DELE, DALF, entre outros, estão bem preparados para alcançar pontuações competitivas e obter a certificação desejada. Eles dominam as habilidades necessárias para lidar com os diferentes formatos de exames e têm confiança em sua capacidade de sucesso."}
                />
             </div>
             <div className=''>
                <PerfilSaidaItem 
                titulo={"Profissionalmente Competente"}
                 texto={"para fins profissionais saem do Be-Smart preparados para ter sucesso em ambientes de trabalho internacionais. Eles são capazes de redigir e-mails profissionais, fazer apresentações convincentes, participar de reuniões e negociações, e colaborar efetivamente em equipes multiculturais."}
                 />
                <PerfilSaidaItem 
                titulo={"Lifelong Learner"} 
                texto={"Além de dominar o idioma estudado, incentivamos nossos alunos a cultivar uma mentalidade de aprendizado ao longo da vida. Eles são incentivados a continuar aprimorando suas habilidades linguísticas mesmo após a conclusão dos cursos no Be-Smart, buscando oportunidades de prática e aperfeiçoamento contínuos"}
                />
             </div>
        </div>
    </div>
  )
}

export default PerfisDeSaida
