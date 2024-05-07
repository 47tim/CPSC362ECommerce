document.addEventListener("DOMContentLoaded", function () {
  var userBalance = parseInt(localStorage.getItem("userBalance")) || 0;

  // Display user balance in coinBar
  var coinBarElement = document.querySelector(".coinBar");
  if (coinBarElement) {
    coinBarElement.innerText = "Coins: " + userBalance;
  } else {
    console.error("Element with class 'coinBar' not found.");
  }

  function confirmPurchase(itemName, price) {
    if (userBalance < price) {
      alert("Insufficient funds!");
      return;
    }

    var confirmPurchase = confirm(
      "Are you sure you want to buy " + itemName + " for " + price + " Coins?"
    );

    if (confirmPurchase) {
      userBalance -= price;

      // Update user balance display
      var coinBarElement = document.querySelector(".coinBar");
      if (coinBarElement) {
        coinBarElement.innerText = "Coins: " + userBalance;
      } else {
        console.error("Element with class 'coinBar' not found.");
      }

      purchasedItemName = itemName;
      purchasedItemPrice = price;
      purchaseDate = new Date();

      // Save purchase details to local storage
      localStorage.setItem("userBalance", userBalance);
      localStorage.setItem("purchasedItemName", purchasedItemName);
      localStorage.setItem("purchasedItemPrice", purchasedItemPrice);
      localStorage.setItem("purchaseDate", purchaseDate);

      alert("Purchase successful!");
    }
  }
});
