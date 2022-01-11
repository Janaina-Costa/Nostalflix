
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


import { arrayImagens } from "./atributo.js"



const btnview = document.querySelector('.btnview')
const btnInfo = document.querySelector('.btninfo')
const desenhoDestaque = document.querySelector('.desenho-destaque')
const descricao = document.querySelector('.descricao')
const titulo = document.querySelector('.titulo')

/**Modal */
const popUp = document.querySelector('#popup')
const fecharPopUp = document.querySelector('.fechar')
const informacao = document.querySelector('#informacao')
const ficha = document.querySelector('#fichatecnica')
const fecharVideo = document.querySelector('#fecharvideo')
const mostrar = document.getElementById("show")
const pop = document.createElement('iframe')


//info da imagem estatica
btnInfo.addEventListener('click', (e)=>{
    popUp.style.display = "flex"
    informacao.innerHTML = 'Atrapalhado e sonhador Doug, ao lado de seu melhor amigo, Skeeter, e de seu fiel cachorro, Costelinha, vive o dia a dia da adolescência. Também tem uma imaginação fértil (sonha até que é um super-herói chamado Homem-Codorna).'
})

//video imagem estatica
btnview.addEventListener('click', function openvideo(e){
    e.preventDefault()
    pop.width = "500"
    pop.height="719"
    pop.title="YouTube video player"
    pop.frameborder="0"
    pop.allow="accelerometer; autoplay= true clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    pop.allowFullscreen
    pop.classList.add('video')
    pop.src = 'https://www.youtube.com/embed/UA_Of0lhIn4'
    mostrar.appendChild(pop)
    mostrar.style.display = 'flex'
})
fecharVideo.addEventListener('click', (e)=>{
    e.preventDefault()
    mostrar.style.display = 'none'
    location.reload()
})

fecharPopUp.addEventListener('click', (e)=>{
    popUp.style.display = "none"
})




document.querySelectorAll('img').forEach(( item,indice) =>{
    
    item.onclick = function(e){
        
        e.preventDefault()
              
                if(indice){
                desenhoDestaque.style.background = arrayImagens[indice].url
                desenhoDestaque.style.backgroundSize = 'cover'
                desenhoDestaque.style.height = '37.5rem'
                desenhoDestaque.style.display = 'flex'
                descricao.innerHTML = arrayImagens[indice].descricao
                titulo.innerHTML = arrayImagens[indice].titulo
                
              
                btnview.addEventListener('click',(e)=>{
                    e.preventDefault()
                    pop.width = "500"
                    pop.height="719"
                    pop.title="YouTube video player"
                    pop.frameborder="0"
                    pop.allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    pop.allowFullscreen
                    pop.classList.add('video')
                    pop.src= arrayImagens[indice].video
                    mostrar.appendChild(pop)
                    mostrar.style.display = 'flex'
                                   
                })

                       
                btnInfo.addEventListener('click', (e)=>{
                    e.preventDefault()
                    popUp.style.display = "flex"
                    informacao.innerHTML = arrayImagens[indice].descricao
                   
                    ficha.innerHTML = arrayImagens[indice].fichaTecnica

                  
                })

                fecharPopUp.addEventListener('click', (e)=>{
                    e.preventDefault()
                    popUp.style.display = "none"   
                })

                fecharVideo.addEventListener('click', (e)=>{
                    e.preventDefault()
                    mostrar.style.display = 'none'  
                    location.reload()
                })
                
            } 
            
        }
            
   
})


