
const submitBtn = document.getElementById('submitBtn');
const userInputField = document.getElementById('user-input');
const checkbox = document.getElementById('checkbox');
const loader = document.getElementById("spinner");
const listResults = document.getElementById("listResults");
const sortBy = document.getElementById("sortBy");

function fiboCalcR(num) {
    if (num === 0 || num === 1) {
        return num;
    } else {
        return fiboCalcR(num - 1) + fiboCalcR(num - 2);
    }
}

async function fiboCalcAsync(number) {
    const path = `http://localhost:5050/fibonacci/${number}`;
    const response = await fetch(path);

    if (!response.ok) {
        const errorText = await response.text()
        throw errorText
    }
    const data = await response.json();
    if (data.result) {
        return data.result
    } else {
        return data
    }
}

async function getFibonacciResults(currentSelectedValue) {
    const response = await fetch("http://localhost:5050/getFibonacciResults");

    if (!response.ok) {
        throw new Error("Network response was not ok. Status code: " + response.status);
    }

    const data = await response.json();
    switch (currentSelectedValue) {
        case 'NumberAsc':
            data.results.sort((a, b) => a.number - b.number);

            break
        case 'NumberDesc':
            data.results.sort((a, b) => b.number - a.number);

            break
        case 'DateAsc':
            data.results.sort((a, b) => a.createdDate - b.createdDate);

            break
        case 'DateDesc':
            data.results.sort((a, b) => b.createdDate - a.createdDate);
            break
        default:
            break
    }
    return data

}

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const userInput = parseInt(userInputField.value);

    if (checkbox.checked) {
        loader.style.display = "block";
        try {
            try {
                const result = await fiboCalcAsync(userInput);
                document.querySelector(".num-output").classList.remove("output-error42");
                document.querySelector(".num-output").innerHTML = result
            } catch (errorData) {
                const el = document.querySelector(".num-output");
                el.classList.add("output-error42");
                document.querySelector(".num-output").innerHTML = errorData
                listResults.innerHTML = "";
                return
            }
            try {
                const currentSelectedValue = sortBy.options[sortBy.selectedIndex].value

                const data = await getFibonacciResults(currentSelectedValue);
                listResults.innerHTML = data.results.map(res =>
                    `<div>The Fibonacci Of <b>${res.number}</b> is ${res.result}. Calculated at: ${new Date(res.createdDate)}</div><hr>`).join('');

            }
            catch (err) {
                document.getElementById("num-error").innerHTML = "Network response was not ok";
            }
        } finally {
            loader.style.display = "none";
        }

    } else {
        const resultLocal = fiboCalcR(userInput)
        document.querySelector(".num-output").innerHTML = resultLocal
        document.querySelector(".num-output").classList.remove("output-error42");


    }
});


