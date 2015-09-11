
$('#view').click(function(){
   $(this).animate({height: 200}, 500);
}).mouseleave(function(){
    $(this).animate({height: 30}, 500);
});

$('.viewPick').click(function(){
    $('.viewSelected').html($(this).html());
    $(this).css({color: 'grey'});

});