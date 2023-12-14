document.querySelector('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log('Paspaustas ieskoti mygtukas')
    let searchQuery = document.querySelector('input').value
    fetch(`https://www.omdbapi.com/?t=${searchQuery}&apikey=bd5bfd88`)
    .then((response)=>data=response.json())
    .then((data)=>{
        console.log(data)
        document.querySelector('.title').textContent = data.Title;
        document.querySelector('.runtime').textContent = data.Runtime;
        document.querySelector('.director').textContent = data.Director;
        document.querySelector('.year').textContent = data.Released;
        document.querySelector('.imdb').textContent = data.imdbRating;
        document.querySelector('.plot').textContent = data.Plot;
        document.querySelector('.poster img').src = data.Poster;   /* <!-- img linkinimas */

    })
    
})

/* Jeigu filmas randmas tik tada rodom lentele su duomenim.
 Jeigu filmas nerastas isvedame klaidam: Filmas nrerastas" */