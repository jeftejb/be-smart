'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  estudantes } from "@/constants";
import AlunosSlideItem from "./AlunosSlideItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function AlunosSlide() {
  return (
    <Carousel
   additionalTransfrom={0}
   arrows={true}
   autoPlay={true}
   autoPlaySpeed={5000}
   centerMode={false}
   infinite
   responsive={responsive}
   itemClass="item"
 
     >
    {
        estudantes.map((item, key)=>(
            <AlunosSlideItem key={key} imagem={item.imagem} cargo={item.cargo} nome={item.nome} mg={item.mg} />
        ))
    }    

</Carousel>
  )
}

export default AlunosSlide
