/* const article = document.getElementById('VIP')
const articles = document.getElementsByTagName('article');
console.log(articles)
article.style.backgroundColor="#ddff88";

for(let article in articles){
    let color = 'rgb(200,122,'+article*15+')';
    console.log(color)
    articles[article].style.backgroundColor = color
}

const articlesByClass = document.getElementsByClassName('super')

console.log(article) */

/* const article = document.querySelector('#VIP');

console.log(article) */

/* for(const link of document.querySelectorAll('a')){
    link.href='https://kitm.lt'
  }  */

/* document.getElementsByTagName('article').style.color = "red";

for(let article in articles){
    let.style.color = rgb(255.255.0);
} */

let articles = document.querySelectorAll('article');

for(let article of articles){
    article.style.color = "red";;
    article.style.fontSize = "2.5em";
}

