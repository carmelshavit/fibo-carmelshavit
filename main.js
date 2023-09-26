// let num = [0, 1, 1 , 2, 3, 5, 8, 13];
function fiboCalc() {
    const index = document.querySelector(".num-input").value
    let prev = 0;
    let curr = 1;
    for (let i = 0; i <= index; i++) {
        const next = prev + curr;

        prev = curr;
        curr = next;
    }
    document.querySelector(".result").innerHTML = curr
}
fiboCalc();



