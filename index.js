//js
//19.03.24
//let us target the buttons and put the funtions right.

//First the clearing function...
let clearButton = document.querySelector(".red");
//let us add an eventlistener
clearButton.addEventListener("click", () =>{
    //we want an event will clear the result
    //let us target the result so we can clear the result
    document.querySelector(".result").value = " "
    //it works!!
});

//...then the display function...
//let us create the funtion directly
function display(value) {
    //let us target the result again...
    document.querySelector(".result").value += value;
}

//let us target equal btn
let calculate = document.querySelector(".equal")
//let us put an eventlistener
calculate.addEventListener("click", () =>{
    //let us target the result yet again
    //create variable = p
    let p = document.querySelector(".result").value
    //let us create variable = q
    let q = eval(p);
    //target reseult
    document.querySelector(".result").value = q;
});

//program the special function
//first square...
let square = document.querySelector(".square");
square.addEventListener("click", () =>{
    let p = document.querySelector(".result").value;
    //result
    document.querySelector(".result").value = p**2;
});

//then the sprR
let sqrtR = document.querySelector(".sqrtR")
sqrtR.addEventListener("click", () =>{
    let p = document.querySelector(".result").value;
    //result
    document.querySelector(".result").value = Math.sqrt(p);
});

//next is cube
let cube = document.querySelector(".cube");
cube.addEventListener("click", () =>{
    let p = document.querySelector(".result").value;
    //result
    document.querySelector(".result").value = Math.pow(p,3);
});

//then sine
let sine = document.querySelector(".sine");
sine.addEventListener("click", () =>{
    let p = document.querySelector(".result").value;
    //result
    document.querySelector(".result").value = Math.sin(p);
});

//and finally, pi
let pi = document.querySelector(".pi");
pi.addEventListener("click", () =>{
    let p = document.querySelector(".result").value;
    //result
    document.querySelector(".result").value = Math.PI;
});

//because of difficulties, percentage
let percent = document.querySelector(".percent");
percent.addEventListener("click", () =>{
    let p = document.querySelector(".result").value;
    p = parseInt(p) 
    let q = p/100;
    //result
    document.querySelector(".result").value = q;
})