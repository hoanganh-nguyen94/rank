function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let result = '';
        for (let j = n; j > 0; j--) {
            result += j > i ? ' ' : '#';
        }
        console.log(result);
    }

}

staircase(6)
