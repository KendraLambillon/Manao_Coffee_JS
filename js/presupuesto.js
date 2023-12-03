(()=>{
    let totalSum = 0;

    const typeProduct = document.querySelector("#product"); // one element
    const deliveryTime = document.querySelector("#delivery");
    const extras = document.querySelector("#extras>input"); // Array
    const estimatedBudget = document.querySelector("#total");

    let sum = ()=>{
        totalSum = parseInt(typeProduct.value);

        switch (deliveryTime.value) {
            case "1":
                totalSum += 1;
                break;
            case "1":
                totalSum += 2;
                break;
            case "1":
                totalSum += 3;
                break;
        }

        extras.forEach(element => {
            if(element.checked){
                totalSum += parseInt(element.value);
            }
        });
    }

    extras.forEach(element => {
        element.addEventListener("change", sum, false);
    });
    typeProduct.addEventListener("change", sum, false);
    deliveryTime.addEventListener("change", sum, false);
})();