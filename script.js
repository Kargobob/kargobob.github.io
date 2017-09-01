function main() {
 $('.content-box').fadeIn(400);
 $('.characters').hide();
 $('.game_info').hide();
 $('h1').on('click', function() {
    $('.game_info').toggle(400);
    })
 $('h2').on('click', function() {
    $('.characters').toggle(200,"linear");
    });
}
$(document).ready(main);