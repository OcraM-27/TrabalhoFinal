// INICIO CARD HOVER

var cards = $('.card');

for(var i = 0; i < cards.length; i++) {
    $('.card')[i].children[0].style.opacity = 1; // opacidade do video
    $('.card')[i].children[1].style.opacity = 0; // opacidade do card-body
}

$('.card').mouseenter(function() {
    $(this)[0].children[0].style.opacity = 0; // passa rato, desliga = 0, liga = 1 (video)
    $(this)[0].children[1].style.opacity = 1; // passa rato, desliga = 0, liga = 1 (body)
})

$('.card').mouseleave(function() {
    $(this)[0].children[0].style.opacity = 1
    $(this)[0].children[1].style.opacity = 0;
})