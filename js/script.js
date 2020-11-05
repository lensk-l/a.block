//бургер
$(document).ready(function (){
    $('.header_burger').click(function() {
        $('.header_burger, .nav').toggleClass('active')
        $('body').toggleClass('lock')
    })

//cпрятать бургер 
    $('.nav-link').click(function() {
        $('.header_burger, .nav').removeClass('active');
        $('body').removeClass('lock')
    });

// обработка сабмита
$('.form').on('submit', function(event){
event.preventDefault()
if (checkValid($(this))=== true) {
sendRequest($(this))
}
})

function checkValid(form) {
    let isValid = true
    $('.form-attention-input').removeClass('form-attention-input')
    const name = form.find('input[name="name"]');
    const email = form.find('input[name="email"]');

    const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const namePattern = /^[a-zA-Z]{3,}$/;

    if ( !name.val().match(namePattern) ) {
        name.addClass('form-attention-input')
        isValid = false
    } 
    if ( !email.val().match(emailPattern)) {
        email.addClass('form-attention-input')
        isValid = false
      }
    return isValid
}
function sendRequest(form) {
    $.ajax({
        url: "/mail.php",
        method: "post",
        data: form.serialize(), 
        success: function(result) {
            $('#contact').hide(300)
            $('.section-thanks').css("display", "flex")
        }
    }) 
}








});