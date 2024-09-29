"use strict";

function call() {
  var x = document.getElementById("deal").value;
  window.location.replace('receipt.html');
  console.log(x);
  document.getElementById("item").innerHTML = x;
}