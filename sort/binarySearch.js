binarySearch = (binArray, low, high, key) => {
    if (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (key === binArray[mid]) {
            return mid;
        } else if (key < binArray[mid]) {
            return binarySearch(binArray, low, mid - 1, key);
        } else if (key > binArray[mid]) {
            return binarySearch(binArray, mid + 1, high, key);
        }
    } else {
        return -1;
    }
}

let tempArray = [21, 13, 34, 65, 38, 92, 66, 78, 99, 55];

let tempResult = binarySearch(tempArray, 0, 9, 78);
console.log(tempResult);