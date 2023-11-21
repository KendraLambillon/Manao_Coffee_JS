function DownloadInput(){
    $.ajax({
        url: 'assets/booking.json',
        type: 'GET',
        success: function(data){
            object_json = data;
            var  chain = '';
            for (i=0; i<object_json.fiche.length; i++){
                chain = chain + 'Name: <b>' + object_json.fiche[i].name + '</b> </br>';
                chain = chain + 'Phone Number: <b>' + object_json.fiche[i].phoneNumber + '</b> </br>';
                chain = chain + 'Booking Date: <b>' + object_json.fiche[i].bookingDate + '</b> </br>';
                chain = chain + 'Number of People: <b>' + object_json.fiche[i].numberOfPeople + '</b> </br>';
            }
            $("#item-json").html(chain);
        },
        error: function (xhr, status){
            alert("ERROR");
        }
    });
}