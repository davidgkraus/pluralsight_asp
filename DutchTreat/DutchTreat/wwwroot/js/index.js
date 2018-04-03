
console.log("Moshi Mosh!");


var theForm = document.getElementById("theForm");
theForm.hidden = false;

var button = document.getElementById("BuyButton");
button.addEventListener("click", function () {
    console.log("Buying item");
});

var productInfo = document.getElementById("product-props");
var listItems = productInfo.item[0].children;