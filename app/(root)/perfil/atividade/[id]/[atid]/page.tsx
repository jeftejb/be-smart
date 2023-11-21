import Image from "next/image";

export default function Page({params}:{params:{id:string, atid:string}}){
    return(

        <section className="relative flex w-full h-full top-0 left-0 ">

        <div className="relative flex flex-col mt-[200px] w-full items-center justify-center ">

            <h1 className="my-10">Actividade : <span className="text-xl text-green-500" >{'Nome actividade'}</span></h1>
        <div className="relative flex flex-col h-full w-fuill py-9 px-20 gap-4  ">
           
          <div className="absolute w-[90%] h-full gap-9  py-10 contrast-[.10] ">
            <Image
            src={'/assets/img5.jpg'}
            alt="fundo"
            fill
            className="object-fill "
            />
          </div>
           <div className=" relative flex flex-col w-full h-full  gap-9 py-10  ">
            <h1 className="text-black text-3xl text-center my-4 font-bold">Atividade: <span>nome da atividade</span></h1>
                {/**caso houver texto */}
            <div className="flex flex-col border-2 border-black items-center justify-center gap-9 p-9 mx-10 ">
                <h1 className="text-black text-4xl font-bold">Titulo</h1>
                <span className="text-black text-3xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde vel nesciunt odit pariatur, cupiditate repellendus quas, eum, totam cum quam ipsam voluptatem asperiores necessitatibus explicabo consequuntur. Totam, earum et!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi voluptates, libero ullam obcaecati ratione. Dicta, sint nobis totam, eaque veritatis accusamus provident omnis deserunt et tempore, distinctio natus inventore?

                </span>
            </div>

            {/** selecao multipla */}

            <div className="flex flex-col border-2 border-black items-center justify-center gap-9 p-9 mx-10 ">
                <h1 className="text-black text-4xl font-bold">Titulo</h1>
                
                <form className="flex flex-col p-4 gap-4">
                    <div className=" flex gap-2">
                    <label htmlFor="vehicle1" className="text-black text-3xl font-bold"> I have a bike</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
             
                    <div className=" flex gap-2">
                    <label htmlFor="vehicle2" className="text-black text-3xl font-bold"> I have a car</label>
                     <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    </div>
                
                    <div className=" flex gap-2">
                    <label htmlFor="vehicle3" className="text-black text-3xl font-bold"> I have a boat</label>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                    </div>
              
                     <button className="text-black px-8 bg-green-100 py-2 border-2 border-black hover:bg-green-500 hover:text-white">Enviar resposta</button>
                </form>
            </div>


              {/** selecao unica */}

              <div className="flex flex-col border-2 border-black items-center justify-center gap-9 p-9 mx-10 ">
                <h1 className="text-black text-4xl font-bold">Titulo</h1>
                
                <form className="flex flex-col p-4 gap-4">
                    <div className=" flex gap-2">
                    <label htmlFor="html" className="text-black text-3xl font-bold">HTML</label>
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    </div>
                    
                    <div className=" flex gap-2">
                    <label htmlFor="css" className="text-black text-3xl font-bold">CSS</label>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    </div>

                    <div className=" flex gap-2">
                    <label htmlFor="javascript" className="text-black text-3xl font-bold">JavaScript</label>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                    </div>
                    <button className="text-black px-8 bg-green-100 py-2 border-2 border-black hover:bg-green-500 hover:text-white">Enviar resposta</button>
                </form>
            </div>
 
                 {/**completar frase */}

            <div className="flex flex-col border-2 border-black items-center justify-center gap-9 p-9 mx-10 ">
                <h1 className="text-black text-4xl">Titulo</h1>
                
                <form className="flex flex-col p-4 gap-4">
                    <div className=" flex flex-col gap-2">
                       <p className="text-black text-3xl font-bold pb-4" >Frase qualquer para completar</p>
                   <input type="text" name="" id=""  placeholder="digite aqui a sua resposta" className="text-black border-2 border-black px-10 py-2 rounded-xl" />
                    </div>
                
                    <button className="text-black px-8 mt-4 bg-green-100 py-2 border-2 border-black hover:bg-green-500 hover:text-white">Enviar resposta</button>
                </form>
            </div>

      {/** redacao*/}
            <div className="flex flex-col border-2 border-black items-center justify-center gap-9 p-9 mx-10 ">
                <h1 className="text-black text-4xl font-bold">Titulo</h1>
                
                <form className="flex flex-col p-4 gap-4">
                    <div className=" flex gap-2">
       
                   <textarea name="" id="" cols={60} rows={10} placeholder="digite aqui a sua redacao" className="text-black text-3xl font-bold"></textarea>
                    </div>
                
                    <button className="text-black px-8 bg-green-100 py-2 border-2 border-black hover:bg-green-500 hover:text-white">Enviar redacao</button>
                </form>
            </div>

           </div>
                         

        </div>
         </div>
        </section>
    )

}

 