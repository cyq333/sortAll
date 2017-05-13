/**
 * Created by admin on 2017/5/7.
 */
let bubbleArr = [22,13,34,65,38,92,66,78,99,55];
for (let i = 0; i < 10; i++) {
    for (let j = 9; j > i; j--){
        if (bubbleArr[j] < bubbleArr[j-1]) {
            let temp = bubbleArr[j];
            bubbleArr[j] = bubbleArr[j-1]
            bubbleArr[j-1] = temp;
        }
    }
    console.log(bubbleArr);
}
console.log("hhh");

