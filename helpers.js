function createNumSet(nums) {
    /**
     * Converts the input array to a Set.
     */
    return new Set(nums);
}

function isSequenceStart(n, numSet) {
    /**
     * Checks if `n` is the start of a sequence.
     */
    return !numSet.has(n - 1);
}

function countSequenceLength(n, numSet) {
    /**
     * Counts consecutive numbers starting from `n`.
     */
    let currentLen = 0;
    let currentNum = n;
    while (numSet.has(currentNum)) {
        currentLen++;
        currentNum++;
    }
    return currentLen;
}

function removeDuplicates(arr) {
    /**
     * Returns a new array with duplicate elements removed.
     */
    return [...new Set(arr)];
}

function findMinMax(arr) {
    /**
     * Returns the minimum and maximum elements in an array.
     */
    if (arr.length === 0) {
        return [null, null];
    }
    return [Math.min(...arr), Math.max(...arr)];
}

function buildFrequencyMap(arr) {
    /**
     * Creates a Map mapping each element to its frequency in the array.
     */
    const frequencyMap = new Map();
    for (const item of arr) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }
    return frequencyMap;
}