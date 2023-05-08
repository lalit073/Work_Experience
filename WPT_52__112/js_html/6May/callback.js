let arr = [45, 21, 01, 98, 3, 20, 85, 78];
function callbk(x) {
  console.log("Numbers", x);
}
arr.forEach(callbk);

//using lambda function

arr.forEach((x) => console.log("Output using Lambda function ", x));