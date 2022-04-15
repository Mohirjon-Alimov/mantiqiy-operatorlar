var dontFly = document.querySelector("#dont-fly");
var ill = document.querySelector("#ill");
var money = document.querySelector("#money");
var weather = document.querySelector("#weather");

var message = "";

var flyBtn = document.querySelector(".btn");

var out = document.querySelector(".out")

flyBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  
  var cantFly = dontFly.checked;
  var iIll = ill.checked;
  var haventMoney = money.checked;
  var badWeather = weather.checked;

  if ((iIll, badWeather,  !haventMoney) || (haventMoney, badWeather)) {
    message = "sayohatga boramiz";
  } else {
    message = "sayohatga bormimiz";
  }
  if (cantFly) {
    message = "sayohatga bormimiz";
  }

  out.textContent = message

})