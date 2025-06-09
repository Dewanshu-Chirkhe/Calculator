function display(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function reset() {
    const result = document.getElementById("result");
    result.value = "";
}

function calculate() {
    const result = document.getElementById("result");
    try {
        let value = eval(result.value);
        result.value = Number(value.toFixed(3));
    } catch {
        alert("Invalid Expression you moron!");
    }
}
