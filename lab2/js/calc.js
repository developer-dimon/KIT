function calc() {
    let result;
    let A = Number(document.getElementById("A").value);
    let B = Number(document.getElementById("B").value);
    let C = Number(document.getElementById("C").value);

    if (A === 0) {
        alert("Incorrect input");
    } else {
        let discriminant = B ** 2 - 4 * A * C;
        console.log(discriminant)
        if (discriminant < 0) {
            result = 'Дискриминант меньше 0'
        } else {
            let x1 = (-B + Math.sqrt(discriminant)) / (2 * A);
            let x2 = (-B - Math.sqrt(discriminant)) / (2 * A);
            result = `x1= ${x1} x2=${x2}`;
        }
        document.getElementById("result").innerHTML = result;
    }
}
