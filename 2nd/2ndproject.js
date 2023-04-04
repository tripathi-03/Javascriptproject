const zodiac = document.getElementById("zodiac");

 const body=document.body;

//  body.style.backgroundColor="Red";
const changeBackground = ()=>{
    switch(zodiac.value){
        case "Aries":
            body.style.backgroundColor="#fc0303";
            break;
        case "Cancer":
            body.style.backgroundColor="#03fcfc";
            break;
        case "Tarus":
            body.style.backgroundColor="#03fccc";
            break;
        case "Gemini":
            body.style.backgroundColor="#fc0283";
            break;
        case "Lesbian":
            body.style.backgroundColor="#fc0453";
            break;
        case "SunnyLeone":
            body.style.backgroundColor="#fc0334";
            break;
        case "MiaKhalifa":
            body.style.backgroundColor="#ff3333";
            break;
        default:
            body.style.backgroundColor="#ffffff";
            break;
    }
};