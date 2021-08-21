function productSelection(product, price) {
    const productPrice = document.getElementById("cost-" + product);
    productPrice.innerText = price;
};

function costTotal() {
    const costBest = document.getElementById("cost-best");
    const costMemory = document.getElementById("cost-memory");
    const costStorage = document.getElementById("cost-storage");
    const costDelivery = document.getElementById("cost-delivery");
    const costTotal = document.getElementById("cost-total");
    const bottomTotalAmount = document.getElementById("bottom-total-amount");
    costTotal.innerText = parseInt(costBest.innerText) + parseInt(costMemory.innerText) + parseInt(costStorage.innerText) + parseInt(costDelivery.innerText);
    bottomTotalAmount.innerText = parseInt(costTotal.innerText);
};

function couponCodeApply() {
    const couponOfKaku = "stevekaku";
    let coupon = couponOfKaku.trim();
    let couponInput = document.getElementById("coupon-input").value;
    if (couponInput.toLowerCase() == coupon.toLowerCase()) {
        const totalAmount = parseInt(document.getElementById("cost-total").innerText);
        discountAmount = totalAmount * 20 / 100;
        discountedPrice = totalAmount - discountAmount;
        document.getElementById("bottom-total-amount").innerText = discountedPrice;
    }
    else {
        alert("Your coupon code are not applicable");
    }
};

window.addEventListener('load', function () {
    costTotal();
});
document.getElementById("8gb-unified-memory").addEventListener('click', function () {
    productSelection("memory", 0);
    costTotal();
});
document.getElementById("16gb-unified-memory").addEventListener('click', function () {
    productSelection("memory", 180);
    costTotal();
});
document.getElementById("256gb-ssd-storage").addEventListener('click', function () {
    productSelection("storage", 0);
    costTotal();
});
document.getElementById("512gb-ssd-storage").addEventListener('click', function () {
    productSelection("storage", 100);
    costTotal();
});
document.getElementById("1tb-ssd-storage").addEventListener('click', function () {
    productSelection("storage", 180);
    costTotal();
});
document.getElementById("slow-shipping").addEventListener('click', function () {
    productSelection("delivery", 0);
    costTotal();
});
document.getElementById("fast-shipping").addEventListener('click', function () {
    productSelection("delivery", 20);
    costTotal();
});
document.getElementById("coupon-apply").addEventListener('click', function () {
    costTotal();
    couponCodeApply();
    document.getElementById("coupon-input").value = '';
});