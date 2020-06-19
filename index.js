function iterativeLog(array){

  array.forEach(function(element, index){
                // callback function
                //automatically ran inside any function
    console.log(`${index}: ${element}`)

  })
}


function iterate(callback){

const array = [1, 2, 3, 4, 5]

array.forEach(callback)

return array
}

// var evens = [0, 2, 4, 6, 8, 10];
//
// evens.forEach((even, index, array) => {
//   debugger;
//   console.log(`${even} is not odd!`);
// });
