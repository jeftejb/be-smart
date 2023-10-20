



let navBar = document.querySelector(".nav")
console.log("ola")

window.addEventListener('scroll', ()=>{
    if(scrollY >=100){
        navBar.classList.add('bg')
    }else{
        navBar.classList.remove('bg')
    }
})

