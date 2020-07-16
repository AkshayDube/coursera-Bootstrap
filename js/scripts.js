$(document).ready(function(){
     $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
            }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
            }
            });
        });
function abc(){
    $('#loginModal').modal('toggle');
}
function bcd(){
    $('#loginModal2').modal('toggle');
}
function def() {
    /*$('#option2').not(':checked').prop("checked", true);*/
    $('#option1').removeAttr('checked');
}