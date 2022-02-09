let u_name = document.getElementById("user-name");

let p_name = document.getElementById("p-name");

let loc = document.getElementById("user-loc");

let design = document.getElementById("user-des");

let comp = document.getElementById("user-comp");





function display(){
    let greet =  `Hi! I'm ${u_name.value} and my partner's name is ${p_name.value}. I stay in ${loc}.
    I am working as ${design.value} in ${comp.value}`
    document.write(greet)
}
