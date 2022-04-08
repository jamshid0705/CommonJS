// Named export
import *as hammasi from'./login.js' // {a as b} import doim kodning boshida turadi
let a=9;
console.log(a);
console.log(hammasi)

// Default export
import func from './login.js'

func('jamshid',1111);

//////////////// await /////////////////////////////

console.log('Hello');
async function aa(){
  const counrty=await fetch('https://restcountries.com/v2/name/uzbekistan');
const counrty1=await counrty.json()
console.log(counrty1);
}

aa()

console.log('Hello1')


///////////////////// inport bn exportni ishlash mehanizimi

const sot=(function (){
  let cart=[];
  let mahsulotlarSoni=100;
  let ishchilarSoni=10;
  let hammaPul=1_000_000;

  function sotibOl(nomi,soni){
    cart.push({nomi,soni});
    console.log(`Siz ${nomi} ni ${soni} ta oldingiz`);
  }
  return{mahsulotlarSoni,ishchilarSoni,sotibOl}
})();

console.log(sot)
sot.sotibOl('olma',20)














