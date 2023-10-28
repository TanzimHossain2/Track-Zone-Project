export const getOffset=(star=-11.5, ending=12)=>{
const offset = [];
for(let i=star;i<=ending;i+=0.5){
offset.push(i); 
}

return offset;
}

