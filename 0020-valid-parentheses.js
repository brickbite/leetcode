/*
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let invalid = false;
  let stack = [];

  // if you close, you have to close with the last one that was open
  // therefore, you have to keep track of which ones you can close with
  // use a stack to play this
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      stack.push(s.charAt(i));
    } else if (s.charAt(i) === ')') {
      stack[stack.length - 1] === '(' ? stack.pop() : invalid = true;
    } else if (s.charAt(i) === '{') {
      stack.push(s.charAt(i));
    } else if (s.charAt(i) === '}') {
      stack[stack.length - 1] === '{' ? stack.pop() : invalid = true;
    } else if (s.charAt(i) === '[') {
      stack.push(s.charAt(i));
    } else if (s.charAt(i) === ']') {
      stack[stack.length - 1] === '[' ? stack.pop() : invalid = true;
    }

    if (invalid) {
      return false;
    }
  }
  
  if (stack.length) {
    return false;
  }

  return true;
};
