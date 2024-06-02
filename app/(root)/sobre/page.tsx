import Link from "next/link";

export default function Sobre(){
    return(
        <section>
            <div className="mt-[8rem] w-[100%] lg:p-[4rem] md:p-[2rem] max-sm:p-[1.4rem] flex items-center justify-center">

                <div className="relative lg:w-[80%]  flex flex-col bg-[#00303C] rounded-xl p-[4rem] max-sm:p-[2rem] ">
               <h1 className="mx-auto lg:text-[25px] md:text-[20px] max-sm:text-[14px] font-bold mb-[3rem] uppercase"> Bem-vindo ao <span className="titulos text-[25px] max-sm:text-[18px]">Be-smart</span> :A sua Jornada Rumo à Excelência Linguística</h1>
                      
                      <div className="w-[90%] flex gap-2 items-center mx-auto justify-center">
                           <div className="bg-white/50 rounded-lg py-[.5rem] p-2"> 
                            <Link href={'/#sobre'} className="text-[12px] font-bold uppercase">Sobre o Be-Samrt</Link>
                            </div>
                            <div className="bg-white/50 rounded-lg py-[.5rem] p-2"> 
                            <Link href={'/#pagamentos'} className="text-[12px] font-bold uppercase " >Pagamentos</Link>
                           </div>
                      </div>
                      <hr className="w-[100%] h-[.2rem] bg-green-700 my-3 "/>
                      <p id="sobre" className="flex mx-auto lg:text-[18px] mt-[1.5rem] md:text-[16px] max-sm:text-[12px] font-semibold opacity-2 text-gray-400" >
                    Desde 2018, a Be-smart tem sido pioneira na formação de profissionais em línguas estrangeiras, sob a liderança visionária da renomada professora, empresária e diretora, Azenate Quintino. Nosso compromisso é oferecer uma educação de qualidade, preparando indivíduos para enfrentar os desafios globais com confiança e habilidade.
                    </p>

                    <p className="flex mx-auto lg:text-[18px] mt-[1.5rem] md:text-[16px] max-sm:text-[12px] font-semibold opacity-2 text-gray-400" >
                    Na Be-smart, buscamos ir além do ensino tradicional de idiomas. Nosso objetivo é proporcionar uma experiência de aprendizado interativa e envolvente, onde cada aluno é incentivado a alcançar todo o seu potencial. Com uma equipe de instrutores altamente qualificados e apaixonados, estamos aqui para guiar você em sua jornada rumo à fluência no inglês e além.
                     </p>

                     <p className="flex mx-auto lg:text-[18px] mt-[1.5rem] md:text-[16px] max-sm:text-[12px] font-semibold opacity-2 text-gray-400" >
                    Nossos cursos são cuidadosamente elaborados para atender às necessidades individuais de cada aluno, seja para fins profissionais, acadêmicos ou pessoais. Utilizamos métodos inovadores e tecnologias de ponta para tornar o aprendizado eficaz e estimulante. Na Be-smart, você não apenas aprende um novo idioma, você vive e respira a língua, mergulhando em uma experiência cultural e linguística enriquecedora.
                    </p>
                    <p className="flex mx-auto lg:text-[18px] mt-[1.5rem] md:text-[16px] max-sm:text-[12px] font-semibold opacity-2 text-gray-400" >
                    Acreditamos que a chave para o sucesso está na prática consistente e na imersão total no idioma. Por isso, oferecemos uma variedade de atividades extracurriculares, como clubes de conversação, eventos culturais e intercâmbios internacionais, para enriquecer ainda mais sua jornada de aprendizado.
                    </p>
                    <p className="flex mx-auto lg:text-[18px] mt-[1.5rem] md:text-[16px] max-sm:text-[12px] font-semibold opacity-2 text-gray-400" >
                    No Be-smart, não apenas ensinamos inglês, moldamos futuros líderes globais. Junte-se a nós e descubra o poder da comunicação sem fronteiras. Seja inteligente, seja Be-smart!
                    </p>

                    <h3 id="pagamentos" className="text-[18px] font-semibold uppercase text-gray-200 mt-4">
                     Pagamentos 
                    </h3>
                    <p className="flex mx-auto lg:text-[18px] mt-[.5rem] md:text-[16px] max-sm:text-[12px] font-semibold opacity-2 text-gray-400" >
                         De momento os pagamentos são feitos pelos metodos convencionais{'(Transferencia bancaria pelo IBAN)'}, enquanto se aprimora o metodo de pagamento dentro do nosso site.
                    </p>
                    <p className="flex flex-col mx-auto lg:text-[18px] mt-[.5rem] md:text-[16px] max-sm:text-[12px] font-semibold opacity-2 text-gray-400" >
                        <span className="text-[18px] font-semibold uppercase text-gray-200 mt-4">
                            Como funciona : 
                        </span>
                       
                    </p>
                    <ul className="w-[100%] flex flex-col gap-[.5rem] mt-4">
                            <li>1- Efectuar transferencia para obter o comprovativo</li>
                            <li>2- Efectuar entrar no site , faça login e entre no seu perfil.</li>
                            <li>3- Efectuar entrar no site , faça login e entre no seu perfil.</li>
                        </ul>
                </div>

            </div>
        </section>
    )
}