function min(a, b, c) {
    if (a < b && b < c) {
        return a;
    } else if (b < c) {
        return b;
    } else {
        return c;
    }
}

console.log(min(5, 2, 8));

// function minArray(arr) {

// }

// console.log(minArray([4, 7, 1, 2])) // 1


function min(a, b, c) {
    let min = a;
    if (min > b) {
        min = b;
    }
    if (min > c) {
        min = c;
    }
    return min;
}

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


