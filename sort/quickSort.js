quickSort = (quickArray, left, right) => {
    if (left < right) {
        let i = left,
            j = right + 1;
        do {
            do i++; while (quickArray[i] < quickArray[left]);
            do j--; while (quickArray[j] > quickArray[left]);
            if (i < j) {
                let temp = quickArray[i];
                quickArray[i] = quickArray[j];
                quickArray[j] = temp;
            }
        } while (i < j);
        let tempelse = quickArray[left];
        quickArray[left] = quickArray[j];
        quickArray[j] = tempelse;
        console.log(quickArray);
        quickSort(quickArray, left, j - 1);
        quickSort(quickArray, j + 1, right);
    }
}

let tempArray = [22, 13, 34, 65, 38, 92, 66, 78, 99, 55];
quickSort(tempArray, 0, tempArray.length - 1);
console.log(tempArray);