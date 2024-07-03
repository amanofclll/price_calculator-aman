function calculate() {
    let dropshipPrice = parseFloat(document.getElementById('dropshipPrice').value);
    let dropshipDiscount = parseFloat(document.getElementById('dropshipDiscount').value);

    if (isNaN(dropshipPrice) || isNaN(dropshipDiscount)) {
        alert("Please enter valid numbers for Dropship Price and Dropship Discount %");
        return;
    }

    // 1. Cost Price
    let costPrice = dropshipPrice * (1 - dropshipDiscount / 100);
    document.getElementById('costPrice').innerText = `Cost Price: ${costPrice.toFixed(2)}`;

    // 2. Panel Price (previously Demo Website Price)
    let panelPrice = costPrice * 2.25;
    document.getElementById('panelPrice').innerText = `Panel Price: ${panelPrice.toFixed(2)}`;

    // 3. Panel Discount No. (previously Demo Discount)
    let panelDiscountNo = dropshipPrice - panelPrice;
    document.getElementById('panelDiscountNo').innerText = `Panel Discount No.: ${panelDiscountNo.toFixed(2)}`;

    // 4. Estimated Number (previously Angel 2 Discount)
    let estimatedNumber = panelPrice - panelDiscountNo;
    document.getElementById('estimatedNumber').innerText = `Estimated Number: ${estimatedNumber.toFixed(2)}`;

    // 5. Final Panel Discount % (previously Panel Discount)
    let finalPanelDiscount = Math.abs(((estimatedNumber / panelPrice) * 100) - 100); // Use Math.abs() to ensure positive value
    document.getElementById('finalPanelDiscount').innerText = `Final Panel Discount %: ${finalPanelDiscount.toFixed(2)}%`;

    // 6. Final Website Price
    let finalWebsitePrice = panelPrice - panelDiscountNo;
    document.getElementById('finalWebsitePrice').innerText = `Final Website Price: ${finalWebsitePrice.toFixed(2)}`;
}
