function consoleLog(num) {
  console.log("num :", num, "\n");
}

//////
function generalFunc(num) {
  let ret;
  setTimeout(() => {
    ret = num;
  }, 100);
  return ret;
}

console.log("general");
consoleLog(generalFunc(1));

//////
function withCallbackFunc(num, callbackFunc) {
  let ret;
  setTimeout(() => {
    ret = num;
    callbackFunc(ret);
  }, 0);
}

console.log("with callback");
withCallbackFunc(2, consoleLog);

//////
function withPromiseFunc(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) resolve(num);
    else reject("num is not positive");
  });
}

console.log("with promise");
withPromiseFunc(0)
  .then((result) => consoleLog(result))
  .catch((result) => consoleLog(result));
