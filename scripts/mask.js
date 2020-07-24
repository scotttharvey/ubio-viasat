import $ from "jquery";
import "jquery-mask-plugin";

$(() => {

  $('.zip').mask('00000');
  $('.pin').mask('0000');
  $('#phone').mask('(000)000-0000');
  $('#SSN').mask('000-00-0000');
  $('#birthday').mask('00/00/0000');
  $('.credit-card-number').mask('0000 0000 0000 0000');
  $('.expire').mask('00/00');
  $('.cvv').mask('000');

});
