// library

function randomRGB() {
  var number = Math.random() * 255;
  number = Math.floor(number);
  return number;
}

function printDate() {
    var today = new Date();
    return today;
}

function sumProduct(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function randomNumber() {
    var chicken = Math.random() * 100;
    var money = Math.floor(chicken);
    return money;
}

function winky(text) {
    return text + " ;)";
}

function findMean(numbers) {
    let length = numbers.length;
    for (var i = 0; i < numbers.length; i++);
    return total / numbers.length;
    
  }

function findMedian() {
    
}

function findMode() {
    
}

module.exports = {
    rgb: randomRGB,
    date: printDate,
    numbre: randomNumber,
    wink: winky,
    add: sumProduct,
    mean: findMean,
    median: findMedian,
    mode: findMode
};