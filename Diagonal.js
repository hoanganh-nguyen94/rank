function diagonalDifference(arr) {
    // Write your code here
    const matrixLength = arr[0].length;
    let totalLeftDiagonal = 0;
    let totalRightDiagonal = 0;
    for (let i = 0; i < matrixLength; i++) {
        totalLeftDiagonal += arr[i][i];
        totalRightDiagonal += arr[i][matrixLength-i-1];
    }

    return (totalLeftDiagonal - totalRightDiagonal) >= 0 ? (totalLeftDiagonal - totalRightDiagonal) : (totalLeftDiagonal - totalRightDiagonal) * -1;
}

console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]))
