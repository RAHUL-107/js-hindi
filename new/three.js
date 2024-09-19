const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function name(val){
//     console.log(val);
// })//callback function- a function passed as an argument in differnt function

// coding.forEach( (val)=> {
//     console.log(val);
// })

// function printme(val){
//     console.log(val);
// }


// coding.forEach(printme)

//array ke andar object access

const mycoding = [
 {
    languagename:"javascript",
    fieldname:"js"
 },
 {
    languagename:"java",
    fieldname:"java"

 },
 {
    languagename:"python",
    fieldname:"py"
 }
]

mycoding.forEach((val)=>{
    console.log(val.languagename)

})