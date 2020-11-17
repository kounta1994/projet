$(document).ready(function(){
$('form').submit(function(event){
    event.preventDefault();
    

    if($('#nom').val()=="" || $('#prenom').val()=="" || $('#date').val()=="" || $('#adresse_postale').val()=="" || $('#email').val()=="" )
    {
        $('#myModal').modal("show");
   
    }else{
        $('#myModal').modal("show");
        var city = $("#adresse").val();
        var date = $("#date").val();
     $(".modal-title").text("Bienvenue "+ $('#nom').val());
   $(".modal-body").html(`vous êtes né le ${date} et vous habitez <img src ="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" <a href ="http://maps.google.com/maps?q=Paris"></a>`);
   
    }
    

});
});


