export default function FormMatricula(){
    return(
        <div className="relative w-[100%] flex p-9">
            <div className="w-[50%]  p-20">
              <img data-aos="fade-up" className="relative bg-cover w-100% rounded-2xl h-[100%] hover:scale-125" src="img/img5.jpg" alt="" />
            </div>
            <form action="" data-aos='fade-down' className="flex flex-col  text-[#000] p-20 w-[50%]  justify-center items-center ">
                <input className="p-2 mb-4 rounded-3xl hover:scale-125 transi w-[100%] bg-transparent border border-fuchsia-300 text-white" type="text" placeholder="Nome"/>
                <input className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="email" name=""  placeholder="Email" id="" />
                <input className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="email" name=""  placeholder="Email-2" id="" />
                <input className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="date" placeholder="Data de nascimento"/>
                <input className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="number" placeholder="Telefone"/>
                <input className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="number" placeholder="Telefone-2"/>
                <select className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" name="" id="">
              
              <option className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="">Masculino</option>
              <option className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="">Femenino</option>
             
         </select>
               <select className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" name="" id="">
                    <option className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" value="">Iniciante</option>
                    <option className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black " value="">Intermedio</option>
                    <option className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" value="">Avancado</option>
               </select>
               
               <div className="flex">
                    <div className="50% p-2">
                    <label className="p-2 mb-4 w-[100%] bg-transparent  text-white" htmlFor="frente">BI ou sedula Frontal</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="file" name="" id="frente" />
                    </div>
                <div className="50% p-2">
                <label className="p-2 mb-4  w-[100%] text-white" htmlFor="frente">BI ou sedula Verso</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-125 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="file" name="" id="frente" />
                </div>
               </div>
              
                <button className="px-5 py-2 border border-pink-300  text-white mt-2 hover:bg-[#ef4444] ">Efectuar matricula</button>
            </form>
        </div>
    )
}