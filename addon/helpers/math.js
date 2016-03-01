import Ember from 'ember';

export function math(params) {
  let result;

  const operand1 = params[0];
  const operator = params[1];
  const operand2 = params[2];

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
  }

  return result;
}

export default Ember.Helper.helper(math);
