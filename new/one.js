// //maps

// const map = new Map()
// map.set('IN','INDIA')
// map.set('USA','UNITED STATES OF AMERICA')
// map.set('FR','FRANCE')
// map.set('IN','INDIA')

// // console.log(map);
// for(const [key,value] of map){
//     console.log(key,":-",value)
// }

const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"

}

for (const key in myobject) {
    console.log(`${key} and the object is ${myobject[key]}`);
   
}


  