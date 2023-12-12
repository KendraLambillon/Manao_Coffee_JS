(()=>{

    let totalSum = 0;

    const typeCoffee = document.querySelector("#product"); //One element
    const delivery = document.querySelector("#delivery");
    const extras = document.querySelectorAll("#extras>input"); //Array
    const totalEst = document.querySelector("#total");

    let suma = ()=>{
        totalSum = parseFloat(typeCoffee.value);

        switch (delivery.value) {
            case "1":
                totalSum += 8;
                break;
            case "2":
                totalSum += 4;
                break;
            case "3":
                totalSum += 0;
                break;
            default:
                totalSum += 0;
                break;
        }

        extras.forEach(element => {
            if(element.checked){
                totalSum += parseFloat(element.value);
            }
        });
        totalEst.value = totalSum;
    }

    extras.forEach(element => {
        element.addEventListener("change",suma,false);
    });
    typeCoffee.addEventListener("change",suma,false);
    delivery.addEventListener("change",suma,false);
})();