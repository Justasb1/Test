(()=>{ // IIF function
    // Global scope
    let firstName = "Migle";
    let lastName = "Paupaite";
    //Funkcijos
    
    //Aprasom funkcija. Standartine funkcija
    function sayHi(name, sayHello){ //name yra funkcijos argumentas
        let lastName="Miglinaite";
        console.log(`Hi ${name}`);
        console.log(firstName) //Function scope. funkcijos galiojimo sritis
        sayHello(); //callback
    }
    
    sayHi('Akvile', ()=>{
        console.log("Hello my girl")
    }); // Funkcijos pakvietimas
    
    
    //Pakeisti funkcija taip, kad ji grazintu pateiktu skaiciu suma
    function sum(...numbers){
        let result=0; //Block scope, bloko galiojimo sritis
        for(let number of numbers){
            result +=number
        }
        return result;
    }
    
    console.log(sum(15,14,13,14,15,8,7,15,14))
    console.log(lastName)
    
    
    //Anonimine funkcija
    
    const showMovie = function(title){
        return title;
    }
    
    console.log(showMovie("KITM"));
    
    // Arow function
    
    const showEmail = (email)=>{
        return email;
    }
    
    console.log(showEmail('kristina@one.lt'));
    
    })();
    
    
    
    