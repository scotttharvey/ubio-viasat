import $ from "jquery";
import "jquery-mask-plugin";

$(() => {

  $('.zip').mask('00000');
  $('.pin').mask('0000');
  $('#phone').mask('(000)000-0000');
  $('#secondPhone, .phone').mask('(000)000-0000');
  $('#SSN').mask('0000');
  $('#birthday').mask('00/00/0000');
  $('.credit-card-number').mask('0000 0000 0000 0000');
  $('.expire').mask('00/00');
  $('.cvv').mask('000');

  function ssnMask() {
    $('#SSN').addClass('hidden');
    let maskVal = '';

    for(let i = 0; i < $('#SSN').val().length; i++) {
       maskVal += '*'
    }

    $('#SSN-mask').val(maskVal);
    $('#SSN-mask').removeClass('hidden');
    $('#SSN-mask').css('letter-spacing', '0.7px');
  }

  function ssnUnmask() {
      $('#SSN-mask').addClass('hidden');
      $('#SSN').removeClass('hidden');
      $('#SSN').focus();
  }

  $('#SSN').focusout(() => ssnMask());
  $('#SSN-mask').focus(() => ssnUnmask());
  $('#SSN').on('input', e => {
      if (e.target.value.length >= 11) {
          ssnMask()
          $('#birthday').focus()
      }
  })

  function birthdayMask() {
      $('#birthday').addClass('hidden');
      let maskVal = '';

      for(let i = 0; i < $('#birthday').val().length; i++) {
          if (i === 2 || i === 5) {
              maskVal += '/'
          } else {
              maskVal += '*'
          }
      }

      $('#birthday-mask').val(maskVal);
      $('#birthday-mask').removeClass('hidden');
      $('#birthday-mask').css('letter-spacing', '0.7px');

  }

  function birthdayUnmask() {
      $('#birthday-mask').addClass('hidden');
      $('#birthday').removeClass('hidden');
      $('#birthday').focus();
  }

  $('#birthday').focusout(() => birthdayMask());
  $('#birthday-mask').focus(() => birthdayUnmask());
  $('#birthday').on('input', e => {

      if (e.target.value > 1 && e.target.value.length <= 1) {
          e.target.value = `0${e.target.value}`
      }

      if (e.target.value.length >= 10) {
          birthdayMask()
      }

  })

});

