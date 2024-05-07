var userBalance = 1000;

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

    document.querySelector(".coinBar").innerText = "Coins: " + userBalance;

    purchasedItemName = itemName;
    purchasedItemPrice = price;
    purchaseDate = new Date();

    // Save purchase details to local storage
    localStorage.setItem("purchasedItemName", purchasedItemName);
    localStorage.setItem("purchasedItemPrice", purchasedItemPrice);
    localStorage.setItem("purchaseDate", purchaseDate);

    alert("Purchase successful!");
  }
}
