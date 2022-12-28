let operatorFunctions = {
  '>': (x, y) => x > y,
  '<': (x, y) => x < y,
  '>=': (x, y) => x >= y,
  '<=': (x, y) => x <= y,
  '==': (x, y) => x == y,
  '!=': (x, y) => x != y,
};

export function evaluateCondition(x, y, operator) {
  return operatorFunctions[operator](x, y);
}

export function ignoreCondition(formData, conditionArr) {
  return conditionArr.every((ele) => {
    console.log(formData, ele.jsonKey, ele.value, ele.op);
    return evaluateCondition(formData[`${ele.jsonKey}`], ele.value, ele.op);
  });
}
