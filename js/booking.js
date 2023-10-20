let numberPeople = document.getElementById("number-people");

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status==200){
        let jsonResponse = xmlhttp.responseText;
        let objectJson = JSON.parse(jsonResponse);

        for(let position in objectJson){
            const option = document.createElement("option");
            option.value = objectJson[position].number_people;
            numberPeople.appendChild(option)
        }
    }
}
xmlhttp.open("GET", "numberpeople.json", true)
xmlhttp.send();