import { AcademicCapIcon, HomeModernIcon, InformationCircleIcon, UserCircleIcon } from "@heroicons/react/20/solid"


export const adminItens = [
    {
        link:'/matricula',
        title:'Matricula',
        image:'',
        texto:"Efectuar matricula de novos alunos.", 
        icon:'<NewspaperIcon className="text-[15px]"/>'
    },
    {
        link:'/pagamentos',
        title:'Pagamentos',
        image:'',
        texto:"Verificar pagamentos e efectuar pagamentos.", 
        icon:'<CreditCardIcon/>'
    }, 
    {
        link:'/funcionarios/option/',
        title:'Funcionarios',
        image:'',
        texto:"Verificar dados dos funcionarios.", 
        icon:'<UserIcon/>'
    },
    {
        link:'/disciplinas/todas',
        title:'Cursos',
        image:'',
        texto:"Criar, editar ou deletar dados das disciplinas.", 
        icon:'<AcademicCapIcon/>'
    }, 
    {
        link:'/material',
        title:'Material',
        image:'',
        texto:"Criar, editar ou deletar dados de materiais.", 
        icon:'<ClipboardCheckIcon/>'
    }, 
    {
        link:'/perfil/atividades',
        title:'Actividades',
        image:'',
        texto:"verificar dados de actividades.",
        icon:'<BookOpenCheckIcon/>'
    },
]







const images = [
    {
        image:'/'
    }
]



export const titleModels = [
    {
        nivel:'Iniciante',
        link:"/aulas",
        imageFundo:"/assets/fundo.jpg",
        image:"/assets/iniciante1.jpg", 
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab id in vitae. Iste similique corrupti illo ex ipsum rerum."
        
    }, 
    {
        nivel:'Intermediario',
        link:"/aulas", 
        imageFundo:"/assets/fundo.jpg",
        image:"/assets/intermedio1.jpg", 
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab id in vitae. Iste similique corrupti illo ex ipsum rerum."
    
    }, 
    {
        nivel:'Avancado',
        link:"/aulas", 
        imageFundo:"/assets/fundo.jpg",
        image:"/assets/fundo.jpg", 
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab id in vitae. Iste similique corrupti illo ex ipsum rerum."
    
    }, 
    {
        nivel:'Bisnes Ingles',
        link:"/aulas",
        imageFundo:"/assets/negocio1.jpg",
        image:"/assets/negocio2.jpg",  
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab id in vitae. Iste similique corrupti illo ex ipsum rerum."
    
    }, 
    {
        nivel:'Ingles para entrevista de Emprego',
        link:"/aulas", 
        imageFundo:"/assets/emprego1.jpg",
        image:"/assets/emprego2.jpg", 
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab id in vitae. Iste similique corrupti illo ex ipsum rerum."
    
    },
    {
        nivel:'Ingles para viagem',
        link:"/aulas", 
        imageFundo:"/assets/viagem1.jpg",
        image:"/assets/viagem2.jpg", 
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab id in vitae. Iste similique corrupti illo ex ipsum rerum."
    
    }


]


export const meses = [

    {mes:"Janeiro", valor:1, sec:1},
    {mes:"Fevereiro", valor:2, sec : 2 },
    {mes:"Março", valor:3 , sec:3},
    {mes:"Abril", valor:4 , sec:4},
    {mes:"Maio", valor:5 , sec:5},
    {mes:"Junho", valor:6 , sec:6},
    {mes:"setembro", valor:9 , sec:7},
    {mes:"Outubro", valor:10 , sec:8},
    {mes:"Novembro", valor:11 , sec:9},
    {mes:"Dezembro", valor:12 , sec:10}
    
]



export const services = [
    {nome:"1"}, 
    {nome:"1"}, 
    {nome:"1"},
    {nome:"1"}, 
    {nome:"1"}, 
    {nome:"1"}
]



export const navItems = [
    {name:"Home", link:"/", icon:<HomeModernIcon className="w-[2rem]  text-center"/>},
    {name:"Cursos", link:"/cursos", icon:<AcademicCapIcon className="w-[2rem] text-center"/>},
    {name:"Perfil", link:"/perfil", icon:<UserCircleIcon className="w-[2rem] text-center"/>},
    {name:"Sobre", link:"/sobre", icon:<InformationCircleIcon className="w-[2rem] text-center"/>},


]


export const tipoDePergunta = [
           {
            nome:"Imagem",
            link:"#",
            id:5
           }, 
           {
            nome:"Escrita",
            link:"#",
            id:6
           }, 
           {
            nome:"Fala",
            link:"#",
            id:7
           }, 
          


]


export const opcoes = [
    {
     nome:"Laranja",
     link:"#",
     id:1
    }, 
    {
     nome:"Macam",
     link:"#",
     id:2
    }, 
    {
     nome:"Abacate",
     link:"#",
     id:3
    }, 
    {
     nome:"Manga",
     link:"#",
     id:4
    }, 


]










export const funcionarios = [
    {
        imagem:"/assets/re.jpg",
        nome:"Rebeca Bundo Kalepete Freitas",
        cargo:"Teacher(Professor)", 
        mg:"Com paciência e comprometimento, os professores da Be-smart tornam o aprendizado do inglês uma jornada emocionante e gratificante."
    }, 
    {
        imagem:"/assets/chi.jpg",
        nome:"João Luciano Chiloia",
        cargo:"Teacher(Professor)", 
        mg:"Os professores da Be-smart transformam desafios em oportunidades de aprendizado, inspirando alunos a superar barreiras linguísticas."

    }
    , 
    {
        imagem:"/assets/chefAz.jpg",
        nome:"Azenate Quintino",
        cargo:"Diretora/Teacher(Professor)", 
        mg:"Com dedicação e paixão, os professores de inglês da Be-smart abrem as portas do mundo através da linguagem."
    }, 
    {
        imagem:"/assets/ale.jpg",
        nome:"Jacinto Alicerce Savindanda",
        cargo:"Teacher(Professor)", 
        mg:"Com dedicação e paixão, os professores de inglês da Be-smart abrem as portas do mundo através da linguagem."
    }, 
    {
        imagem:"/assets/ha.jpg",
        nome:"António Wehunga Luís Hamuyela",
        cargo:"Teacher(Professor)", 
        mg:"Na Be-smart, os professores não apenas ensinam inglês, eles capacitam mentes e alimentam sonhos."
    }, 
    {
        imagem:"/assets/jos.jpg",
        nome:"Artur Josias Chimuco",
        cargo:"Teacher(Professor)/Dir. Pedagógicas", 
        mg:"Os professores da Be-smart são verdadeiros mestres, guiando alunos em jornadas de descoberta e crescimento pessoal."
    }, 
    {
        imagem:"/assets/vi.jpg",
        nome:"Victorino Cambar Koque Chivango",
        cargo:"Teacher(Professor)", 
        mg:"Com paciência e comprometimento, os professores da Be-smart tornam o aprendizado do inglês uma jornada emocionante e gratificante."
    }, 
   
]


export const estudantes = [
    {
        imagem:"/assets/al1.png",
        nome:"Tchiloia",
        cargo:"Teacher(Professor)", 
        mg:"Os professores da Be-smart transformam desafios em oportunidades de aprendizado, inspirando alunos a superar barreiras linguísticas."

    }
    , 
    {
        imagem:"/assets/al2.png",
        nome:"Azenate Quintino",
        cargo:"Diretora/Teacher(Professor)", 
        mg:"Com dedicação e paixão, os professores de inglês da Be-smart abrem as portas do mundo através da linguagem."
    }, 
    {
        imagem:"/assets/al3.png",
        nome:"Hamuiela",
        cargo:"Teacher(Professor)", 
        mg:"Na Be-smart, os professores não apenas ensinam inglês, eles capacitam mentes e alimentam sonhos."
    }, 
    {
        imagem:"/assets/al4.png",
        nome:"Josias",
        cargo:"Teacher(Professor)/Dir. Pedagógicas", 
        mg:"Os professores da Be-smart são verdadeiros mestres, guiando alunos em jornadas de descoberta e crescimento pessoal."
    }, 
    {
        imagem:"/assets/al1.png",
        nome:"Victorino Cambar Freitas",
        cargo:"Teacher(Professor)", 
        mg:
        "Com paciência e comprometimento, os professores da Be-smart tornam o aprendizado do inglês uma jornada emocionante e gratificante."
    }, 
   
]