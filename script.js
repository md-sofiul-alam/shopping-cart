function increaseDecrease(isIncrease, id1) {
    const quantityField = document.getElementById(id1);
    const quantityValue = parseInt(quantityField.value);
    if (isIncrease) {
        quantityField.value = quantityValue + 1;
    }
    else if (quantityValue > 1) {
        quantityField.value = quantityValue - 1
    }
}
function price(unitPrice, id1, id2) {
    const quantityField = document.getElementById(id1);
    const quantityValue = parseInt(quantityField.value);
    const Price = document.getElementById(id2)
    Price.innerText = quantityValue * unitPrice;
}

function totalCost(id1, id2, id3, id4) {
    const phonePriceString = document.getElementById(id1);
    const phonePrice = parseInt(phonePriceString.innerText);
    const casePriceString = document.getElementById(id2);
    const casePrice = parseInt(casePriceString.innerText);
    const subTotalPrice = document.getElementById(id3);
    const totalPrice = document.getElementById(id4);
    subTotalPrice.innerText = phonePrice + casePrice;
    totalPrice.innerText = phonePrice + casePrice;
}

function removeCart(id){
    const removedCart = document.getElementById(id);
    const totlaArea= document.getElementById('total-area');
    totlaArea.remove();
    removedCart.remove();
}

document.getElementById('btn-phone-decrease').addEventListener('click', function () {
    increaseDecrease(false, 'phone-qty-field');
    price(1219, 'phone-qty-field', 'phone-price-total');
    totalCost('phone-price-total', 'case-price-total', 'sub-total', 'total');
})

document.getElementById('btn-phone-increase').addEventListener('click', function () {
    increaseDecrease(true, 'phone-qty-field');
    price(1219, 'phone-qty-field', 'phone-price-total');
    totalCost('phone-price-total', 'case-price-total', 'sub-total', 'total');
})

document.getElementById('phone-remove').addEventListener('click', function(){
    removeCart('phone-cart');
})

document.getElementById('btn-case-decrease').addEventListener('click', function () {
    increaseDecrease(false, 'case-count');
    price(59, 'case-count', 'case-price-total');
    totalCost('phone-price-total', 'case-price-total', 'sub-total', 'total');
})

document.getElementById('btn-case-increase').addEventListener('click', function () {
    increaseDecrease(true, 'case-count');
    price(59, 'case-count', 'case-price-total');
    totalCost('phone-price-total', 'case-price-total', 'sub-total', 'total');
})
document.getElementById('case-remove').addEventListener('click', function(){
    removeCart('case-cart');
})