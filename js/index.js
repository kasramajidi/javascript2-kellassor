// tasks 1

function inputArray (input) {
    input.filter((input) => {
        if (input % 2 === 0){
            console.log(input);
        }
    })
}

inputArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])