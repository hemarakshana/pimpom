function logNumbersWithConditions() {
    var inputElement = document.getElementById("numberInput");
    var resultElement = document.getElementById("result");
  
    var n = inputElement.value;
    n = parseInt(n, 10);
  
    if (isNaN(n) || n <= 0) {
      alert("Please enter a valid positive number.");
      return false; // Prevent form submission
    }
  
    var result = "";
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += '<span class="pimpom">pimpom</span> ';
      } else if (i % 3 === 0) {
        result += '<span class="pim">pim</span> ';
      } else if (i % 5 === 0) {
        result += '<span class="pom">pom</span> ';
      } else {
        result += '<span class="green">' + i + '</span> ';
      }
    }
  
    resultElement.innerHTML = result;
    return false; // Prevent form submission
  }
  