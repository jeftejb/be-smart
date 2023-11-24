import Services from "@/components/services"
import Image from "next/image"




export default function Home() {
  return (
   <>
   <main id="hero-section">
    <div id="backg" >
      <img id="nav-img" src="img/img5.jpg" className="object-cover h-full w-full" alt="" />
    </div>

     <div data-aos="fade-up">
      <h1 id="titulo">Be-Smart </h1>
      <p id="sub">Venha aprender ingles com os melhores </p>
     </div>

    <img id="scrol-icon" src="img/down arrow.png" alt=""/>
  </main>
  
  
  <section>
   <div className="relative  text-center items-center justify-center px-[80px] py-[10vw]  ">
    
      <h1 id="tituloTra" data-aos="fade-up" className="text-5xl mb-6">Be-Smart</h1>
      <p id="subTra"  data-aos="fade-up" className="text-2xl" >
      Comprometa-se com a prática diária para construir uma base sólida. Explore a cultura associada à língua, mergulhando em filmes, música e livros. Envolva-se em interações regulares, seja conversando com nativos ou participando de grupos de estudo, para ganhar confiança na aplicação prática do idioma.
        </p>
    
    <div className="relative w-full h-[25vh] flex mt-20 mb-20 px-4 ">

      <div className="absolute w-[45%] h-full shadow-2xl bg-transparent shadow-green-600  mr-4 flex hover:scale-105 duration-100 rounded-2xl  ">

        
      <div className="relative w-[45%] h-[55vh]  overflow-hidden -mt-20  items-center justify-center ">
        <div className="absolute rounded-full w-56 h-56 mt-10 ml-10 inset-0 bg-green-500  shadow-2xl shadow-green-600"/>
             <Image
             src="/assets/chefAz.png"
             alt="Boss"
             fill
             className="object-cover w-full h-full shadow-2xl shadow-black"
             />
        </div>


      <div className=" relative w-[50%] h-full ml-0  bg-white rounded-lg mr-2  p-4 left-0 ">
        <div className=" relative w-full h-full p-2  ">

          <ul className="flex flex-col   ">
            <li className="text-black mr-20">
              <div className="flex items-center justify-center">
              <div className="relative rounded-full w-[10px] h-[10px] bg-black  "/>
              <span className="ml-2 text-2xl font-bold">Aprendizado</span> 
              </div> 
              </li>


              <li className="text-black mt-6 mr-12">
              <div className="flex items-center justify-center">
              <div className="relative rounded-full w-[10px] h-[10px] bg-black  "/>
              <span className="ml-2 text-2xl font-bold">Networking</span> 
              </div> 
              </li>

              <li className="text-black mt-6 ml-0">
              <div className="flex items-center justify-center">
              <div className="relative rounded-full w-[10px] h-[10px] bg-black  "/>
              <span className="ml-2 text-2xl font-bold">Proatividade</span> 
              </div> 
              </li>

          </ul>

        </div>

      </div>

      </div>

      <div className="absolute w-[49%]  h-full shadow-2xl shadow-green-500  mr-4 flex hover:scale-105 duration-100 right-0  ">
      <Image
             src="/assets/banner.png"
             alt="Boss"
             fill
             className="object-cover w-full h-full shadow-2xl shadow-black"
             />
      </div>


    </div>

 <div className="relative w-full   h-full items-center justify-center py-2 mt-48">
        <h1 className="text-center font-bold text-2xl">Serviços</h1>
      </div>

     <div className="max-sm:grid-cols-1 grid grid-cols-3 mt-4 "  id="service-grid">
    <Services/>
    
    </div>


    <div className="w-full h-full ">

    </div>
   </div>
   </section>

     
 

   </>
  )
}
