function findPairs() {
    let rawArray = [];
    let resultArray = [];

    function createPairs(a, b) {
        let pairs = [];
        pairs.push(a);
        pairs.push(b);
        return pairs;
    }

    // Tạo mảng từ 1 đến 100
    for (let i = 1; i < 101; i++) {
        rawArray.push(i);
    }

    // Tìm các cặp có tổng chia hết cho 17
    for (let i = 0; i < rawArray.length; i++) {
        for (let z = i + 1; z < rawArray.length; z++) {
            if ((rawArray[i] + rawArray[z]) % 17 === 0) {
                resultArray.push(createPairs(rawArray[i], rawArray[z]));
            }
        }
    }

    return console.log(resultArray, resultArray.length);
}
findPairs();