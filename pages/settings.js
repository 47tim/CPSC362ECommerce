document.addEventListener("DOMContentLoaded", function () {
  var purchasedItemName = localStorage.getItem("purchasedItemName");
  var purchasedItemPrice = localStorage.getItem("purchasedItemPrice");
  var purchaseDate = localStorage.getItem("purchaseDate");

  var itemNameElement = document.querySelector(".transactionItem h2");
  var itemPriceElement = document.querySelector(".transactionCost h2");
  var dateElement = document.querySelector(".transactionDate h2");

  // Format the date
  if (purchaseDate) {
    var formattedDate = new Date(purchaseDate);
    var day = formattedDate.getDate();
    var month = formattedDate.getMonth() + 1; // Month is zero-based
    var year = formattedDate.getFullYear();

    // Pad single digit day and month with leading zero if necessary
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // Update purchaseDate to desired format
    purchaseDate = month + "/" + day + "/" + year;
  }

  // Update the inner HTML of the selected elements with the formatted date
  if (itemNameElement && itemPriceElement && dateElement) {
    itemNameElement.textContent = purchasedItemName;
    itemPriceElement.textContent = purchasedItemPrice;
    dateElement.textContent = purchaseDate;
  } else {
    console.error("One or more elements not found.");
  }
});
