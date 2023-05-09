function calculator(x, y, operator) {
    switch (operator) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
      default:
        return "Invalid operator";
    }
  }
  