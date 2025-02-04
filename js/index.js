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

// const btn = document.querySelector(".btn")
// const spanAll = document.querySelector(".div-span")

// btn.addEventListener("click", () => jokeFunction())

// const jokeFunction = async () => {
//     const url = "https://api.chucknorris.io/jokes/random"

//     const response = await fetch(url, {
//         method: "GET"
//     })

//     const data = await response.json();


//     spanAll.textContent = data.value

// };

// task 4

// function sortArray(inputArray) {
//     // اگر بخواهیم از کوچیک به بزرگ مرتب کنه این
//     return inputArray.sort((a, b) => a - b)
//     //    اگر بخواهیم از بزرگ به کوچیک مرتب کنه 
//     //    return inputArray.sort((a, b) => b - a)
// }

// console.log(sortArray([2, 6, 7, 20, 58, 1, 56]));


// task 5

// function objectNumber(input) {
//     let count = 0;

//     Object.keys(input).forEach(keyObject => {
//         if (typeof input[keyObject] === 'object' && input[keyObject] !== null) {
//             count += objectNumber(input[keyObject]);
//         } else {
//             count += 1;
//         }
//     });

//     return count;
// }

// const myObject = {
//     name: 'kasra',
//     age: 21,
//     address: {
//         city: 'tehran',
//     },
// };

// console.log(objectNumber(myObject));


// task 6

// const btn = document.querySelector(".btn")
// const bodyAll = document.querySelector("body")

// btn.addEventListener("click", () => {
//     bodyAll.style.backgroundColor = "blue"
// })

//tasks 7

// const numberSpan = document.querySelector(".timer")

// let numberTimer = 10;

// const timeInterval = setInterval(() =>{
//     if(numberTimer > 0){
//         numberTimer--;
//         numberSpan.textContent = numberTimer
//     }else{
//         clearInterval(timeInterval);
//         numberSpan.textContent = "وقت تمام شده"
//     }
// }, 1000)


// task 8

// const divAll = document.querySelector(".div-btn")

// function createElement(){
//     const h1Element = document.createElement("h1")
//     h1Element.textContent = "kasra"
//     const spanElement = document.createElement("span")
//     spanElement.textContent= "this is the best site "
//     const removeBtn = document.createElement("button")
//     removeBtn.textContent= "remove" 
//     removeBtn.classList.add("btn")

//     divAll.append(h1Element, spanElement, removeBtn)
// }

// createElement()

// task 9

// function isValidEmail(email) {
//     if (!email.includes("@")) return false

//     const parts = email.split("@")
    
//     if (parts.length < 2 || parts[0].length === 0 || parts[1].length === 0){
//         return false
//     }

//     const domain = parts[1]

    
//     if (!domain.includes(".")) return false
    
//     const domainPart = domain.split(".")

//     if (domainPart.length < 2 || domainPart[domainPart.length - 1].length < 2){
//         return false
//     }

//     return true
// }

// console.log(isValidEmail("kasra@gmail.com"));

// task 10

function ArrayToObject(input){
    return input.map((item) => ({
        text: item,
        length: item.length
    }))
}

console.log(ArrayToObject(['kasra', "hossien", "sahar"]))

