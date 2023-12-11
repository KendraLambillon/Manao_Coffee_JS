function DownloadInput(){
    $.ajax({
        url: 'assets/booking.json',
        type: 'GET',
        success: function(data){
            object_json = data;
            var  chain = '';
            for (i=0; i<object_json.fiche.length; i++){
                chain = chain + 'Day: <b>' + object_json.fiche[i].day + '</b> </br>';
                chain = chain + 'Horario: <b>' + object_json.fiche[i].horario + '</b> </br>';
            }
            $("#item-json").html(chain);
        },
        error: function (xhr, status){
            alert("ERROR");
        }
    });
}