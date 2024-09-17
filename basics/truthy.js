// const useremail = "h@hitesh.ai"

// if(useremail){
//     console.log("got user email");
// }else{
//     console.log("dont have user email");

// }


//falsy value
// false,0,-0,bigint 0n, "",null,undefined,nan
//true values
//"0","false"(string ke andar hai)," ",[],{},function(){}
//if u want to check if it is array or not
// if (useremail.length===0){
//     console.log("array is empty");
// }



//nullish coalescing operator (??): null undefined

let val1;
val1 = 5?? 10
val1 = null??10
val1 = undefined??10
console.log(val1);

//terniary operator

//condition? true:false

const iceteaprice = 100
iceteaprice <=80 ? console.log("less than 80") : console.log("more than 80")