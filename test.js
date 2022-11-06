function consoleLog(num) {
  console.log("num :", num, "\n");
}

const inputNum = 5;

////// general
function generalFunc(num) {
  let ret;
  setTimeout(() => {
    if (num > 0) ret = num;
    else ret = "num is not positive";
  }, 100);
  return ret;
}

console.log("general");
consoleLog(generalFunc(inputNum));

////// callback
function withCallbackFunc(num, callbackFunc) {
  let ret;
  setTimeout(() => {
    if (num > 0) ret = num;
    else ret = "num is not positive";
    callbackFunc(ret);
  }, 0);
}

console.log("with callback");
withCallbackFunc(inputNum, consoleLog);

////// Promise
function withPromiseFunc(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) resolve(num);
    else reject("num is not positive");
  });
}

console.log("with promise");
withPromiseFunc(inputNum)
  .then((result) => consoleLog(result))
  .catch((result) => consoleLog(result));

////// async
async function withAsync(num) {
  try {
    if (num > 0) {
      return await num;
    } else forceErrror;
  } catch (err) {
    return "num is not positive";
  }
}

console.log("with async");
withAsync(inputNum).then((ret) => consoleLog(ret));
