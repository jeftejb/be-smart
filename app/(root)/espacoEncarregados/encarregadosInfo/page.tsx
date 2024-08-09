import Link from "next/link";

export default function page(){
    return(
        <section>
            <div className="mt-[8rem] w-[100%] lg:p-[4rem] md:p-[2rem] max-sm:p-[1.4rem] flex flex-col items-center justify-center">

                <div className="relative text-[15px] font-sans text-gray-300 font-bold lg:w-[80%]  flex flex-col bg-[#00303C] rounded-xl p-[4rem] max-sm:p-[2rem] ">
               <h1 className="mx-auto lg:text-[25px] md:text-[20px] max-sm:text-[14px] font-bold mb-[3rem] uppercase"> Bem-vindo ao <span className="titulos text-[25px] max-sm:text-[18px] mx-2">Be-smart</span></h1>
                      
                   
                      <hr className="w-[100%] h-[.2rem] bg-green-700 my-3 "/>
                    <article className="text-wrap gap-4 flex flex-col">
                    <p className="indent-8 whitespace-normal">
                    Nossa área reservada para os encarregados de educação é projetada para oferecer um ambiente acolhedor e informativo, onde vocês podem acompanhar de perto o progresso e o desenvolvimento dos seus filhos. Aqui estão algumas das vantagens e recursos que oferecemos nesta área:
                    </p>
                     

                        <ul className="w-full h-full p-4 gap-2 flex flex-col list-disc">
                            <li className=" whitespace-normal">
                            Acesso à Informação Atualizada: Mantenha-se informado sobre o desempenho acadêmico, frequência e participação dos seus filhos através de relatórios regulares e atualizações disponíveis em nosso portal online.
                            </li>
                            <li className=" whitespace-normal">
                            Comunicação Aberta e Eficiente: Facilitamos a comunicação direta com os professores e a equipe administrativa, garantindo que todas as suas dúvidas e preocupações sejam rapidamente atendidas.
                            </li>
                            <li className="whitespace-normal">
                            Feedback Constante: Valorizamos a sua opinião e incentivamos a participação ativa no processo educacional. Realizamos encontros regulares para ouvir suas sugestões e ideias, buscando sempre melhorar nossos serviços.
                            </li>
                            <li className="whitespace-normal">
                            Recursos de Apoio: Disponibilizamos materiais de apoio, guias e recursos educativos que podem ser utilizados em casa para complementar o aprendizado dos alunos.
                            </li>
                            
                        </ul>
                   

                            <p className="indent-8 whitespace-normal">
                            Estamos comprometidos em trabalhar lado a lado com vocês para garantir que cada aluno alcance seu máximo potencial. No Be-Smart, acreditamos que a parceria entre a escola e os encarregados de educação é essencial para o sucesso dos nossos estudantes em um mundo cada vez mais globalizado e competitivo.
                            </p>
                          <p className="indent-8 whitespace-normal">
                          Convidamos vocês a explorar nossa área reservada e aproveitar ao máximo todos os recursos e oportunidades que oferecemos. Juntos, podemos construir um futuro brilhante para seus filhos, repleto de conquistas e realizações.
                          </p>
                  
                    <p className="text-center text-orange-400 uppercase whitespace-normal">
                    Obrigado por escolher o Be-Smart. Estamos ansiosos para colaborar com os encarregados nesta jornada educacional!
                    </p>
                   
                    </article>
                    <div className="w-full flex-col items-center justify-centermt-4 p-6">
                        <h1 className="text-[14px] font-bold uppercase text-center">Caso já possua codigo de validação para ter acesso a aréa de encarregados pode colocar no formulário abaixo</h1>
                        <span className="text-[12px] text-center">Caso ainda não possua um codigo por favor entre em contato em a nossa equipe</span>
                   <form className="w-full flex flex-col items-center justify-center" action="">
                    <input className="px-8 py-2 rounded-lg bg-black text-[12px] w-[60%] text-white border-[1px] border-green-500" type="text" placeholder="Codigo de consfirmação" name="codigo"/>
                    <button className="px-4 py-[.5rem] text-[12px] uppercase mt-2 bg-green-500 w-[30%] rounded-md" type="submit">Entrar</button>
                   </form>
                </div>
                </div>

               

            </div>
        </section>
    )
}