let a = 5;
let b = 7;
let op = "mul";
let result;

if(op == "add"){
function add(a,b){
    return (a + b)
    
}
result= add(a,b)
}
else if(op == "sub"){
    function sub(a,b){
        return (a - b)
}
 result= sub(a,b)
}
else if(op == "mul"){
    function mul(a,b){
    return (a * b)
}
 result= mul(a,b)
}
else if(op == "div"){
    function div(a,b){
       return (a / b)
}
result= div(a,b)
}

document.write(result)
