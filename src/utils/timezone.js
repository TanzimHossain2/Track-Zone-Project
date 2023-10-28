import { TIME_ZONE_OFFSET } from "../CONSTANT/timezone";

export const getOffset=(star=-11.5, ending=12)=>{
const offset = [];
for(let i=star;i<=ending;i+=0.5){
offset.push(i); 
}
return offset;
}

export const getTimeZone = () =>{
    return ['UTC','GMT',...Object.keys(TIME_ZONE_OFFSET)]
}