'use client'
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Explore novas culturas hoje',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Explore new cultures today!',
        1500,
        'Descubra o mundo com línguas!',
        1500,
        'Discover the world with languages!',
        1500, 
        'Viaje através das palavras sempre!',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Travel through words forever!',
        1500,
        'Aprenda, cresça, conecte-se, compreenda!',
        1500,
        'Learn, grow, connect, understand!',
        1500, 
        'Expandindo horizontes com idiomas diversos',
        1500, 
        'Expanding horizons with diverse languages!',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Caminhe rumo à fluência agora!',
        1500,
        'Walk towards fluency now!',
        1500
      ]}
   
      speed={48}
      className='text-[.7rem] md:text-[1rem] text-[#6BA614] font-bold uppercase'
      repeat={Infinity}
    />
  );
};


export default TextEffect;