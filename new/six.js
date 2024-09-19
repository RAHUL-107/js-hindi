// const myNums = [1,2,3]

// // const myTotal = myNums.reduce(function (acc,currval){
// //     return acc + currval
// // },0)


// const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)

// console.log(myTotal);


const shoppingcart = [
    {
        itemname : "js course",
        price : 3000
    },
    {
        itemname : "python course",
        price : 9000
    },
    {
        itemname : "mobile dev course",
        price : 6000
    },
    {
        itemname : "data science course",
        price : 12000
    },

]


const val=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(val)


