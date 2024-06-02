'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FuncionarioItem from "./FuncionarioItem";
import { funcionarios } from "@/constants";
import { fetchFuncionariosNomes } from "@/lib/actions/funcionarios.actions";
import { useEffect, useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


function FuncionariosSlide() {


  return (
    <Carousel
   additionalTransfrom={0}
   arrows={true}
   autoPlay={true}
   autoPlaySpeed={7000}
   centerMode={false}
   infinite
   responsive={responsive}
   itemClass="item"
     >
    {
        funcionarios.map((item, key)=>(
            <FuncionarioItem key={key} imagem={item.imagem} cargo={item.cargo} nome={item.nome} mg={item.mg} />
        ))
    }    

</Carousel>
  )
}

export default FuncionariosSlide
