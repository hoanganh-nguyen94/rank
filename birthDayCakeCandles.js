function birthdayCakeCandles(candles) {
    // const obj = candles.reduce((r, v, i, a, k = Math.floor(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
    // const keyLargest = Object.keys(obj).map(x => +x).sort().reverse()[0];
    //
    // return obj[keyLargest].length;
    const largest = Math.max(...candles);

    return candles.filter(x => x === largest).length;
}

birthdayCakeCandles([3, 2, 1, 3]);


// function birthdayCakeCandles(candles) {
//     const arrTemp = candles.sort().reverse();
//     const candlesTallest = arrTemp[0];
//
//     return (arrTemp.lastIndexOf(candlesTallest) + 1);
// }
//
// birthdayCakeCandles([3, 2, 1, 3]);


