var wrapper = document.querySelector(".wrapper");
//var resultEle = document.querySelector(".result");
var submitEle = document.querySelector(".submit");

function askUser() {
  var miles = Number(prompt("What is the approximate number of miles you will drive?"));
  var gasolinePrice = Number(prompt("What is the current cost of gasoline in your area?"));
  var mpg1 = 12
  var mpg2 = 17
  var mpg3 = 26
  var mpg4 = 29
  

  document.getElementById("mpg1").innerHTML = "To drive a car with an MPG rating of "+mpg1+" for  "+miles+" miles at $"+gasolinePrice+" per gallon would cost $"+calculation(miles,gasolinePrice,mpg1)
  
  document.getElementById("mpg2").innerHTML = "To drive a car with an MPG rating of "+mpg2+" for  "+miles+" miles at $"+gasolinePrice+" per gallon would cost $"+calculation(miles,gasolinePrice,mpg2)
  
  document.getElementById("mpg3").innerHTML = "To drive a car with an MPG rating of "+mpg3+" for  "+miles+" miles at $"+gasolinePrice+" per gallon would cost $"+calculation(miles,gasolinePrice,mpg3)
  
  document.getElementById("mpg4").innerHTML = "To drive a car with an MPG rating of "+mpg4+" for  "+miles+" miles at $"+gasolinePrice+" per gallon would cost $"+calculation(miles,gasolinePrice,mpg4)
    
  
}

function calculation(miles, gasolinePrice, mpg) {
  return (miles*gasolinePrice)/mpg;
}

askUser();

submitEle.addEventListener("click", function () {
  askUser();
  });