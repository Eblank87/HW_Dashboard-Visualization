// Get references to the h1 tag that will display the count, the increment, and decrement buttons
var $count = document.querySelector(".panel h1");
var $incrementBtn = document.querySelector("#increase");
var $numberInput = document.querySelector("#numberInput");
var $decrementBtn = document.querySelector("#decrease");
// var $checkButton = document.querySelector("#CheckButton");

// The current number the user is on is tracked within the JavaScript and posted to $count and $numberInput upon initial load
var currentNumber = 1;
$numberInput.value = currentNumber;
$count.innerText = currentNumber;

// currentNumber goes up by one each time the $incrementButton is clicked. The fizzBuzz function is then run on the new number.
$incrementBtn.addEventListener("click", function() {
  currentNumber++;
  fizzBuzz(currentNumber);
});

// currentNumber goes down by one each time the $incrementButton is clicked. The fizzBuzz function is then run on the new number.
$decrementBtn.addEventListener("click", function() {
  currentNumber--;
  fizzBuzz(currentNumber);
});

// Function determines whether to print "Fizz", "Buzz", "FizzBuzz", or currentNumber depending on whether the current number is evenly divisible by 3 and/or 4.
function fizzBuzz(currentNum) {
  $numberInput.value = currentNum;
  if (currentNum % 3 === 0 && currentNum % 5 === 0) {
    $count.innerText = "FizzBuzz";
  }
  else if (currentNum % 3 === 0) {
    $count.innerText = "Fizz";
  }
  else if (currentNum % 5 === 0) {
    $count.innerText = "Buzz";
  }
  else {
    $count.innerText = currentNum;
  }
}

