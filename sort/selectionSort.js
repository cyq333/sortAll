let selectArr = [22,13,34,65,38,92,66,78,99,55];

for (let i = 0; i < selectArr.length; i++) {
    let minIndex = i;
    minValue = selectArr[minIndex];
    for (let j = i + 1; j < selectArr.length; j++) {
        if (selectArr[j] < minValue) {
            minIndex = j;
            minValue = selectArr[j];
        }
    }
    let temp = selectArr[i];
    selectArr[i] = selectArr[minIndex];
    selectArr[minIndex] = temp;
    console.log(selectArr);
}
console.log(selectArr); 