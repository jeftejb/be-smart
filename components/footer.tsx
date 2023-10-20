

export default function Footer(){
    return(
        <section id="footer">
                <h1 className="text-5xl mb-3 font-bold " data-aos='fade-up'>Be-Smart</h1>
                <p className="font-bold mb-[20px]" data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia numquam voluptatem nemo.</p>
            
            <div className="flex w-[100%] justify-evenly px-[100px] py-[1vw]">
            <img id="footer-img" src="img/img5.jpg" alt="" />
            <div id="footer-desc">
                <h1>Facebook</h1>
                <h1>Youtube</h1>
            </div>
            </div>
            
            <p id="footer-dir">Todos os direitos reservados</p>
        </section>
    )
}