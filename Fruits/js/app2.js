document.querySelector('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log('Paspaustas ieskoti mygtukas')
    let searchQuery = document.querySelector('input').value
    fetch(`https://www.fruityvice.com/api/fruit/${searchQuery}`)
    .then((response)=>data=response.json())
    .then((data)=>{
        console.log(data)
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.id').textContent = data.id;
        document.querySelector('.family').textContent = data.family;
        document.querySelector('.order').textContent = data.order;
        document.querySelector('.genus').textContent = data.genus;
        document.querySelector('.nutritions').textContent = data.nutritions;
        document.querySelector('.calories').textContent = data.calories;
        document.querySelector('.fat').textContent = data.fat;
        document.querySelector('.sugar').textContent = data.sugar;
        document.querySelector('.carbohydrates').textContent = data.carbohydrates;
        document.querySelector('.protein').textContent = data.protein;
        document.querySelector('.poster img').src = data.Poster;

    })
    
})

