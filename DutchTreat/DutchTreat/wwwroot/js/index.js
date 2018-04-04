$(document).ready(function () {
    console.log("Moshi Mosh!");


    //var theForm = document.getElementById("theForm");
    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#BuyButton");
    button.on("click", function () {
        console.log("Buying item");
    });

    //var productInfo = document.getElementByClassName("product-props");
    //var listItems = productInfo.item[0].children;

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on" + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(250);
    })
});