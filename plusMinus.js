function plusMinus(arr) {
    // Write your code here
    const arrLength = arr.length;
    let [p, n, e] = [0, 0, 0];
    arr.forEach(x => {
        if (x === 0) {
            e++;
        } else if (x > 0) {
            p++
        } else {
            n++;
        }

    });


    return [p / arrLength, n / arrLength, e / arrLength];
}

console.log(plusMinus([
    -4, 3, -9, 0, 4, 1,
]))
