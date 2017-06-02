insertSort = (insertArray) => {
    let arrayLength = insertArray.length,
        i,
        j,
        temp;
    for (i = 1; i < insertArray.length; i++) {
        temp = insertArray[i];
        for (j = i; j >= 0; j--) {
            if (insertArray[j - 1] > temp) {
                insertArray[j] = insertArray[j - 1];
            } else {
                insertArray[j] = temp;
                break;
            }
        }
        console.log(insertArray);
    }
    return insertArray;
}

let tempArray = [22, 13, 34, 65, 38, 92, 66, 78, 99, 55],
    tempResult = insertSort(tempArray);
console.log(tempResult);