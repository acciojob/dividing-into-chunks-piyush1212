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