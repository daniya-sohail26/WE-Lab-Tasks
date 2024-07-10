function calculateOrder() {
    const starters = document.querySelectorAll('input[name="starters"]:checked');
    const majorFoods = document.querySelectorAll('input[name="major-foods"]:checked');
    const desserts = document.querySelectorAll('input[name="desserts"]:checked');
    const orderSummary = document.getElementById('orderSummary');

    let orderDetails = 'Order Summary:\n';
    let totalAmount = 0;

    function getOrderDetails(checkboxes) {
        checkboxes.forEach((checkbox) => {
            const [item, price] = checkbox.value.split('|');
            orderDetails += `${item} - Rs ${price}\n`;
            totalAmount += parseFloat(price);
        });
    }

    getOrderDetails(starters);
    getOrderDetails(majorFoods);
    getOrderDetails(desserts);

    orderDetails += `\nTotal Amount: Rs ${totalAmount.toFixed(2)}`; //for number of digits after the decimal point
    orderSummary.value = orderDetails;
}
