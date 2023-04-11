let total = document.getElementById("main-input");

let calculate = (number) => {

//    if (number === '.' && total.value.includes('.')) return;

    if (number === '.') {
        let count = (total.value.match(/\./g) || []).length;
        if (count >= 2) {
            return;
        }
    }
    
    total.value = total.value + number;
};

let totalCalculation = () => {
    try {
        total.value = eval(total.value)
    }
    catch(err) {
        alert("Please enter a valid operation!")
    }
};

let clearAll = () => {
    total.value = " ";
};
let deleteAll = () => {
    total.value = total.value.slice(0, -1);
};
