$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                $("#map").html("Geolocation is not supported by this browser.");
            }
        }


        //     if($('#nom').val()=="" || $('#prenom').val()=="" || $('#date').val()=="" || $('#adresse_postale').val()=="" || $('#email').val()=="" )
        //     {
        //         $('#myModal').modal("show");

        //     }else{
        //         $('#myModal').modal("show");
        //         var city = $("#adresse").val();
        //         var date = $("#date").val();
        //      $(".modal-title").text("Bienvenue "+ $('#nom').val());
        //    $(".modal-body").html(`vous êtes né le ${date} et vous habitez <img src ="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" <a href ="http://maps.google.com/maps?q=Paris"></a>`);

        //     }

        contactStore.add($('#nom').val(), $('#prenom').val(), $('#date').val(), $('#email').val(), $('#adresse').val());

        var contactList = contactStore.getList();
        for (var contact of contactList) {
            console.log(contact,contact.name);
              document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                  '<tr><td>'+ contact.name +'</td><td>'+contact.firstname +'</td><td>'+contact.date +'</td><td>'+contact.mail +'</td><td>'+ contact.adress +'</td><td>';
        }
       
        $("#GPS").click(function (event) {
            event.preventDefault();
            console.log("click");
            getLocation()

        });

    });
});