/* const students = ['Ieva', 'Kristina', 'Karolina', 'Irina', 'Tina']

// Naudodami cikla isveskite varujs konsoleje


console.log(students[0])
console.log(students[1])
console.log(students[2])


for(let i=0;i<=students.length;i++){
    console.log(students[i])
}

for(let student of students)[
    console.log(student)
]

for(let key in students){
    console.log(key)
} */

const movies = [

{
    id:1,
    title:'Matrix',
    idmb:7
},
{
    id:2,
    title:'Hackers',
    idmb:9
},
{
    id:3,
    title:'JavaScript is fun',
    idmb:7
},
{
    id:4,
    title:'Programming is great adventute',
    idmb:7
},
{
    id:5,
    title:'I love programming',
    idmb:10
}

]

for(let movie of movies){
    if(movies.idmb>7){
    console.log(movie.title)
    }
}