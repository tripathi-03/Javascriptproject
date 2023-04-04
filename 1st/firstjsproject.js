const input=document.getElementById("numofwords");

const conatainer = document.querySelector(".container");
let nuodwords;


const generatewords =(n)=>{
const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let text="";
for(let i=0;i<n;i++){
    const random=(Math.random()* (letter.length-1)).toFixed(0)
    text+=letter[random];
}
return text;
}


const generatepara=()=>{

    nuodwords=(Number(input.value));

    const para=document.createElement("p");

    let data="";
   
    for(let i=0;i<nuodwords;i++){
    //   data+=  generatewords((Math.random()*15).toFixed(0)).toLowerCase();
    data+=  generatewords((Math.random()*15).toFixed(0));
      data+=" ";
    }
    
    console.log(data);
    para.innerText=data;
    
    para.setAttribute("class","parss" );
    
    conatainer.append(para);
}


