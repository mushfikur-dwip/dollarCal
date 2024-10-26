function calculate(paymentMethod) {
  // Get input values
  const amount = parseFloat(document.getElementById("bkashAmount").value);
  const dollarRate = parseFloat(document.getElementById("dollarRate").value);
  const salesPrice = parseFloat(document.getElementById("salesPrice").value);

  // Validate inputs
  let isValid = true;
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("amountError").textContent =
      "Invalid amount entered.";
    isValid = false;
  } else {
    document.getElementById("amountError").textContent = "";
  }

  if (isNaN(dollarRate) || dollarRate <= 0) {
    document.getElementById("dollarRateError").textContent =
      "Invalid dollar rate entered.";
    isValid = false;
  } else {
    document.getElementById("dollarRateError").textContent = "";
  }

  if (isNaN(salesPrice) || salesPrice <= 0) {
    document.getElementById("salesPriceError").textContent =
      "Invalid sales price entered.";
    isValid = false;
  } else {
    document.getElementById("salesPriceError").textContent = "";
  }

  if (!isValid) {
    return; // Exit the function if any input is invalid
  }

  // Determine the fee percentage based on the selected payment method
  let feePercentage = 0;
  if (paymentMethod === "bkash") {
    feePercentage = 0.0149;
  } else if (paymentMethod === "nagad") {
    feePercentage = 0.0125;
  } else if (paymentMethod === "bank") {
    feePercentage = 0.01;
  }

  // Calculate Transfer Money based on the selected payment method
  const transferMoney = amount * feePercentage + amount;

  // Calculate other values based on your logic
  const dollarAmount = amount / dollarRate - 0.05; // Example deduction of 0.05
  const buyingRate = transferMoney / dollarAmount;
  const profitPerDollar = salesPrice - buyingRate;
  const totalProfit = dollarAmount * profitPerDollar;

  // Display results
  document.getElementById("dollarAmount").textContent = dollarAmount.toFixed(2);
  document.getElementById("transferMoney").textContent =
    transferMoney.toFixed(2);
  document.getElementById("buyingRate").textContent = buyingRate.toFixed(2);
  document.getElementById("resultSalesPrice").textContent =
    salesPrice.toFixed(2);
  document.getElementById("profitPerDollar").textContent =
    profitPerDollar.toFixed(2);
  document.getElementById("totalProfit").textContent = totalProfit.toFixed(2);
}
