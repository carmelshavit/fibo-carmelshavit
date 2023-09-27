// let num = [0, 1, 1 , 2, 3, 5, 8, 13];
function fiboCalc() {
    const index = document.querySelector(".num-input").value

    let result = fiboCalcR(index)    
    document.querySelector(".result").innerHTML = result
}


function fiboCalcR(num){
    if (num === 1){
        return 1
    }else if (num === 0){
        return 0
    }else{ return fiboCalcR (num-1) + fiboCalcR(num-2) 
         
    }
}




