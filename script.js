const divide = (arr, n) => {
    const result = [];
    let currentSubarray = [];

    for (const num of arr) {
        if (currentSubarray.reduce((sum, el) => sum + el, 0) + num <= n) {
            currentSubarray.push(num);
        } else {
            result.push(currentSubarray);
            currentSubarray = [num];
        }
    }

    // Append the last subarray
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
