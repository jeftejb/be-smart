import Services from "@/components/services"




export default function Home() {
  return (
   <>
   <main id="hero-section">
    <div id="backg" >
      <img id="nav-img" src="img/img5.jpg" alt="" />
    </div>

     <div data-aos="fade-up">
      <h1 id="titulo">Be-Smart </h1>
      <p id="sub">Venha aprender ingles com os melhores </p>
     </div>

    <img id="scrol-icon" src="img/down arrow.png" alt=""/>
  </main>
   <div className="relative  text-center items-center justify-center px-[80px] py-[10vw]  ">
    
      <h1 id="tituloTra" data-aos="fade-up" className="text-5xl mb-6">Be Smart</h1>
      <p id="subTra"  data-aos="fade-up" className="text-2xl" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus aliquid est nihil accusamus!</p>
    
     <div className="max-sm:grid-cols-1 grid grid-cols-3  "  id="service-grid">
    <Services/>
    
    </div>
   </div>

     
 

   </>
  )
}
