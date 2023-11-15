function DownloadInput(){
    $.ajax({
        url: 'assets/booking.json',
        type: 'GET',
        success: function(data){
            object_json = data;
            var  chain = '';
            for (i=0; i<object_json.fiche.lenght; i++){
                chain = chain + 'Name' + object_json.fiche[i].name;
                chain = chain + 'Phone Number' + object_json.fiche[i].phoneNumber;
                chain = chain + 'Booking Date' + object_json.fiche[i].bookingDate;
                chain = chain + 'Number of People' + object_json.fiche[i].numberOfPeople;
            }
            $("#item-json").html(chain);
        },
        error: function (xhr, status){
            alert("ERROR");
        }
    });
}