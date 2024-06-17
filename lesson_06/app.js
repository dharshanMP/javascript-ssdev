// let my_name = 'Dharshan';

// function greet(){
//     console.log(`Hello! ${my_name}`);
// }

// greet()



// // Degree Calculation


// let user_input = prompt('converting Celsius or Fahrenheit (c or f) :')


// function fahrenheit_converter(){
//     let celsius = prompt('enter the celsius : ');
//     let f = Math.round((celsius * 9/5)+32);
//     console.log(`Fahrenheit is ${f}`)
// }

// function celsius_converter(){
//     let Fahrenheit = prompt('enter the fahrenheit : ');
//     let c = Math.round((Fahrenheit - 32)*5/9);
//     console.log(`Celsius is ${c}`);
// }


// function convert_temperature(degree, unit){
//     if (unit === 'f'){
//         degree = fahrenheit_converter()
//     }25
//     else{
//         degree = celsius_converter()
//     }

// }

// convert_temperature(degree = user_input, unit = user_input)


let user_input2 = prompt('enter the converting number : ');
let converting_term = prompt('From km or miles : ')

function convert_distance(length, from ,to){
    let result;
    if (from === 'miles' && to ==='km'){
        result = length*1.609;
        console.log(result);
        
    }

    else if(from === 'km' && to === 'miles'){
        result = length*0.62
        console.log(result);
    }

    else if(from === 'miles' && to === 'ft'){
        result = length*5280;
        console.log(result);
    }

    else if(from === 'km', to === 'ft'){
        result = length*3281;
        console.log(result);
    }

    else if (from === 'lb' && to === 'lb') {
        console.log(`Invalid unit ${from} & ${to}`);
    }
    
    else if(from === to ){
        console.log(length);
    }
    
   
}

let change_to = prompt('To km or miles or ft(feet) : ');

convert_distance(length = user_input2, from = converting_term, to = change_to)
