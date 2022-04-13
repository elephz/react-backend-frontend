function oneTest(num, text) {
  num = +num;
  let textToArray = text.split("");
  if (num < 0 || num < textToArray.length || !text)
    return "invalid input";

  let result = 0;
  if (textToArray.length !== num) {
    let count = 0;
    for (let j = textToArray.length; j < num; j++) {
      textToArray = [...textToArray, textToArray[count]];
      count++;
      if (count == textToArray.length) count = 0;
    }
  }

  for (let i = 0; i < textToArray.length; i++) {
    const element = textToArray[i];
    const nextElement = textToArray[i + 1];
    if (element === nextElement) result++;
  }

  return result;
}


function twoTest(num) {
  const banks = [100, 20, 10, 5, 1];
  let total = +num;
  let result = 0;

  while (total > 0) {
    for (let i = 0; i < banks.length; i++) {
      const element = banks[i];
      if (total >= element) {
        total -= element;
        result++;
        break;
      }
    }
  }

  return "result = " + result;
}