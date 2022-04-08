// Named export
let a=5;
let t=7;
let y=6;
export{a as alla,t,y} //  export kodning eng oxirida yoziladin

// Default export

export default function(ism,parol){
  if(ism==='jamshid'&& parol===1111){
    console.log("Siz tizimga kirdingiz")
  }
  else{
    console.log('Siz kirolmadingiz')
  }
}

///////////////////// CommonJS











