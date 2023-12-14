
// // Kam uzdedu ivyki          ivykio izdejimas. Ivykis  Funkcija kuri vykdoma po ivykio
// /* document.querySelector('a').addEventListener('click', ()=>{

// } */

// /* link.textContent = prideda kaipo plain teksta */
// /* link.innerHTML = prideda kaip html */


// const links = document.querySelector('a'); // Pasiimu visus linkus

// for(const link of links){
//     link.addEventListener('click', (event)=>{ //Pridedu click eventa visiems linkams
//         console.log(event.target);
//         event.target.style.color="#000"; //keiciu stiliu linkui, ant kurio spaudziu
//         event.target.innerHTML = "<strong>Pakeiciau teksta</strong>"; //textContent keicia teksta
//     })
// }

// document.querySelector('form').addEventListener('submit',()=>{
//     console.log(e.target)
//     e.preventDefault(); //numatytosios formos elgsenos keitimas
//     document.querySelector('main').style.backgroundColor = document.querySelector('input').value;

// })

// /* Uzduotis

// Sukutrti laukelius i kurious vartotojas iveda srifto dydi ir spalva. 

// Sie nustatyami turi biti pritaikyti kas antram li elementui */


// for(const link of document.querySelectorAll('a')){
//     link.textContent('https://mdn.com')
//     link.href="https://mdn.com"
// }


document.querySelector('.todo form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let li = document.createElement('li'); //Sukuriame li dom'e
    li.textContent = document.querySelector('.todo form input').value; // li pridedame turini
    document.querySelector('.todo ul').appendChild(li); //pridedu sulurta i i ul elementa
    document.querySelector('.todo form input').value = ''; //nenuresetinam input laukeli
})

