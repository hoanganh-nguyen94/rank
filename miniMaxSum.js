function miniMaxSum(arr) {
    const arrTemp = arr.sort();
    const totalArray = arrTemp.reduce((a, b) => a + b, 0);

    // return totalArray - arrTemp.pop() + '' + totalArray - arrTemp[0]
    console.log((totalArray - arrTemp.pop()) + ' ' + (totalArray - arrTemp[0]));
}

miniMaxSum([1,3,5,7,9])
