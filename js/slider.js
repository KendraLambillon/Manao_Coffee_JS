let complete = false;
complete = create();

if(complete){
    var indexValue = 1;
    showImg(indexValue);

    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    left.addEventListener("click", ()=>{
        showImg(indexValue += -1)
    })

    right.addEventListener("click", ()=>{
        showImg(indexValue += 1)
    })

    let arrayBtn = document.querySelectorAll(".btn");

    arrayBtn.forEach((item, index) =>{
        item.addEventListener("click", (e)=>{
            showImg(indexValue = e.target.id.substr(-1))
        })
    })
}

function showImg(image) {
    setTimeout(showImg, 3500);//Automate the slider call

    var i;
    const img = document.querySelectorAll(".gallery");
    const slider = document.querySelectorAll(".btn");

    if(image > img.length){
        indexValue = 1;
    }

    if(image < 1){
        indexValue = img.length;
    }

    for (i=0; i < img.length; i++){
        img[i].style.display = "none";
    }

    for (i=0; i < img.length; i++){
        slider[i].style.background = "rgba(0,0,0,0.3)";
    }

    img[indexValue-1].style.display = "block";
    slider[indexValue-1].style.background = "white";

    //Sliders automate
    indexValue++;
    if(indexValue > img.length){
        indexValue = 1;
    }
}



function create(){
    const slider = document.querySelector(".box-image");
    //Left arrow
    let divLeft = document.createElement('div');
    divLeft.className = "sliders left";
    divLeft.style.background = "rgba(0,0,0,0.3)";

    let spanLeft = document.createElement('span');
    spanLeft.className = "fa-solid fa-arrow-left";
    spanLeft.style.color = "white";
    divLeft.append(spanLeft);

    slider.append(divLeft);

    //Right arrow
    let divRight = document.createElement('div');
    divRight.className = "sliders right";
    divRight.style.background = "rgba(0,0,0,0.3)";

    let spanRight = document.createElement('span');
    spanRight.className = "fa-solid fa-arrow-right";
    spanRight.style.color = "white";
    divRight.append(spanRight);

    slider.append(divRight);

    //Rond buttons
    let divRond = document.createElement('div');
    divRond.className = "btn-slides";

    slider.append(divRond);

    const images = document.querySelectorAll('.gallery');
    for(var i=1; i<=images.length; i++){
        let spanRond = document.createElement('span');
        spanRond.className = "btn";
        spanRond.id = "btn-1";

        divRond.append(spanRond);
    }

    return true;
}