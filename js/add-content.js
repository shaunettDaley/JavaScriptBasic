let today = new Date();
let hourNow = today.getHours();
let greeting;
if(hourNow > 18){
    greeting = "Good afternoon";
}else if(hourNow > 0){
    greeting = "Good morning";
}else{
    greeting = "welcome";
}


document.write(`<h3> ${greeting} </h3>`);
