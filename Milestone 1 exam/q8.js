function printInvertedRightAngleTriangle(i) {
    for (let row = i; row >= 1; row--) {
        let pattern = '';

        for (let j = 1; j <= row; j++) {
            pattern += '*';
        }

        console.log(pattern);
    }
}

const input = 6; // You can change this to any positive integer
printInvertedRightAngleTriangle(input);



