let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(but1=>{
    but1.addEventListener('click',(e) =>{
        if(e.target.innerHTML =='='){
            string = eval(string); // inbuilt java function
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML=='DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string+=e.target.innerHTML;
            input.value = string;
        }
    })
    // Next work is to add key press event also.
    })