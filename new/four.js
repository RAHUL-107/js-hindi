// const coding = ["js","ruby","java","python","cpp"]

// //foreach koi value return ni krta
// coding.forEach((val)=>{
//     console.log(val);
// })

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> num > 4  )//this will return value
// console.log(newNums);

//{}agr ye use krenge to scope start ho jayega and alag se return likhna pdega

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=>{ 
//     return num > 4 } )//this will return value
// console.log(newNums);

myNums.forEach((num)=>{
    if(num>4){
       newNums.push(num)
    }
    console.log(newNums)

})
