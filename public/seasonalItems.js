var purchasedItemName = "";
var purchasedItemPrice = 0;
var purchaseDate;

function confirmPurchase(itemName, price) {
  var confirmPurchase = confirm(
    "Are you sure you want to buy " + itemName + " for " + price + " Coins?"
  );

  if (confirmPurchase) {
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
