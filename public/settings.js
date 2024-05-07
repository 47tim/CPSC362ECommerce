// Retrieve purchase details from local storage
var purchasedItemName = localStorage.getItem("purchasedItemName");
var purchasedItemPrice = localStorage.getItem("purchasedItemPrice");
var purchaseDate = localStorage.getItem("purchaseDate");

document.getElementById("transactionDate").innerText = purchaseDate;
document.getElementById("transactionItem").innerText = purchasedItemName;
document.getElementById("transactionCost").innerText = purchasedItemPrice;
