document.addEventListener("DOMContentLoaded", function () {
  // Read userBalance from localStorage
  let userBalance = localStorage.getItem("userBalance");
  if (!userBalance) {
    // Set default userBalance if not found in localStorage
    userBalance = 0;
  }
  //localStorage.removeItem("userBalance"); // ADD THIS IF U WANNA RESET COINS BALANCE

  // Display userBalance on the page
  document.getElementById("userBalance").innerText = userBalance;

  // Add event listeners to coin package buttons
  const coinPackages = document.querySelectorAll(".coin-package");
  coinPackages.forEach((coinPackage) => {
    coinPackage.addEventListener("click", function () {
      // Get the amount of coins and price
      const coins = this.querySelector(".price").textContent.split(" ")[0];
      const price = parseFloat(
        this.querySelector("div:nth-child(2)").textContent.replace("$", "")
      );

      // Confirm purchase with user
      if (confirm(`Do you want to purchase ${coins} coins for $${price}?`)) {
        // Update user balance
        userBalance = parseInt(userBalance) + parseInt(coins);
        // Store updated user balance in localStorage
        localStorage.setItem("userBalance", userBalance);
        // Display updated user balance on the page
        document.getElementById("userBalance").innerText = userBalance;
        // Display success message
        alert(`Purchase successful! You have purchased ${coins} coins.`);
      }
    });
  });
});
