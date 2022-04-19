function calc(input) {
  const inputArray = Array.from(input).filter((item, index) => item !== ' ')
  while (inputArray.includes('(')) {
    let parenthesis = inputArray.filter(
      (item, index) => item === '(' || item === ')'
    )
    if (parenthesis[0] !== parenthesis[1]) {
      const newArray = inputArray.slice(
        inputArray.indexOf('(') + 1,
        inputArray.indexOf(')')
      )
      inputArray.splice(
        inputArray.indexOf('('),
        inputArray.indexOf(')') - inputArray.indexOf('(') + 1,
        calc(newArray.join(''))
      )
    } else {
      if (
        parenthesis[parenthesis.length - 1] !==
        parenthesis[parenthesis.length - 2]
      ) {
        const newArray = inputArray.slice(
          inputArray.lastIndexOf('(') + 1,
          inputArray.lastIndexOf(')')
        )
        inputArray.splice(
          inputArray.lastIndexOf('('),
          inputArray.lastIndexOf(')') - inputArray.lastIndexOf('(') + 1,
          calc(newArray.join(''))
        )
      } else {
        const newArray = inputArray.slice(
          inputArray.indexOf('(') + 1,
          inputArray.lastIndexOf(')')
        )
        inputArray.splice(
          inputArray.indexOf('('),
          inputArray.lastIndexOf(')') - inputArray.indexOf('(') + 1,
          calc(newArray.join(''))
        )
      }
    }
  }
  let temp = ''
  const numbers = []
  const operators = []
  inputArray.forEach((item, index) => {
    if (item !== '+' && item !== '-' && item !== '*' && item !== '/') {
      temp += item
    } else {
      numbers.push(temp)
      temp = ''
      operators.push(item)
    }
    if (temp && index === inputArray.length - 1) {
      numbers.push(temp)
    }
  })
  for (let i = 0; i < operators.length; i++) {
    let helper = 0
    switch (operators[i]) {
      case '*':
        helper += parseFloat(numbers[i]) * parseFloat(numbers[i + 1])
        numbers.splice(i, 2, helper)
        operators.splice(i, 1)
        break
      case '/':
        helper += parseFloat(numbers[i]) / parseFloat(numbers[i + 1])
        numbers.splice(i, 2, helper)
        operators.splice(i, 1)
        break

      default:
        break
    }
  }
  let sum = 0
  numbers.forEach((item, index) => {
    if (index === 0) {
      sum = parseFloat(item)
    } else {
      switch (operators[index - 1]) {
        case '+':
          sum += parseFloat(item)
          break
        case '-':
          sum -= parseFloat(item)
          break
        case '*':
          sum *= parseFloat(item)
          break
        case '/':
          sum /= parseFloat(item)
          break

        default:
          break
      }
    }
  })
  console.log(sum)
  return sum
}
export default calc
