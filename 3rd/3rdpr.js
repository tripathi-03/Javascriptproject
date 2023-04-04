const name=document.getElementById("name");


const tagscontainer =document.querySelector(".tags");
const addName =()=>{


    if(name.value==="")return null;
    console.log(name.value);

    const tag=document.createElement("div");

    tag.setAttribute("class" ,"tag");

    tag.innerText=`Hey,I am ${name.value}`;

    tagscontainer.append(tag);

}