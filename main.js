const submitBtn = document.getElementById('submitBtn')

const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function fiboCalcR(num) {
    if (num === 0 || num === 1) {
        return num;
    } else {
        return fiboCalcR(num - 1) + fiboCalcR(num - 2);
    }
}

function fiboCalc(number) {
    const path = `http://localhost:5050/fibonacci/${number}`

    fetch(path)
        .then(response => {
            if (!response.ok) {
                const el = document.querySelector(".num-output");
                el.classList.add("output-error42");
                return response.text()
            }
            else {
                document.querySelector(".num-output").classList.remove("output-error42");
                return response.json().then((json) => json.result);
            }
        })
        .then((arg) => {
            document.querySelector(".num-output").innerHTML = arg;
        })
}
const loader = document.getElementById("spinner");
document.getElementById("spinner").style.display = "none";

submitBtn.addEventListener('click', (event) => {
    console.log(event)
    event.preventDefault()
    loader.style.display = "block";

    setTimeout(function () {
        loader.style.display = "none";
        const userInput = parseInt(document.getElementById('user-input').value);
        const result = fiboCalc(userInput);
        console.log(result);
    }, 1000);

});



// res.text()
// res.json()

// function json() {
//     const text = res.text();
//     return JSON.parse(text);
// }


// function fetch(url) {
//     const response = __fetch(url);
//     return new Promise((resolve) => {
//         resolve(new Response(response))
//     });
// }