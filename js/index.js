// tasks 1

// function inputArray (input) {
//     input.filter((input) => {
//         if (input % 2 === 0){
//             console.log(input);
//         }
//     })
// }

// inputArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// tasks 2


// در این سوال از دو روش میشه استفاده کرد که هر دو روش به شکل زیر هستن:

// روش اول استفاده از reduce هست

// function reduceArray(inputArray) {
//     return inputArray.reduce((acc, value) => Array.isArray(value) ? acc.concat(reduceArray(value)) : acc.concat(value), [])
// }

// console.log(reduceArray([1, [2, [3, [4]], 5]]))

// // داستان تابع اول اینطوری که وقتی ارایع اعداد وارد میشه  ردیوس کنه و دوتا ورودی بهش میدم ک یکی برای مفدار و یکی برای چیزی که میخوام انباشته کنیم که با شرط این کار انجام میدیم

// // روش دوم از متد flat
// function flatArray(inputArray) {
//     return inputArray.flat(Infinity)
// }

// console.log(flatArray([1, [2, [3, [4]], 5]]))

// task 3

const btn = document.querySelector(".btn")
const spanAll = document.querySelector(".div-span")

btn.addEventListener("click", () => jokeFunction())

const jokeFunction = async () => {
    const url = "https://api.chucknorris.io/jokes/random"

    const response = await fetch(url, {
        method: "GET"
    })

    const data = await response.json();


    spanAll.textContent = data.value

};

