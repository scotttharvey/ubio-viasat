import $ from "jquery";
import parsley from 'parsleyjs'
const plansoptions = $('.plan-option');
const deviceCard = $('.device-card');
const scrollOnSmall = $('.fixed-submit button');
const paymentMethod = $('.payment-method input');


const $form = $('form')

window.Parsley.on('form:init', function() {
  // TODO: make form submit button disabled and gray when the page first loads.
  console.log(`form init'd`)
});

$('form').on('keyup change paste', 'input, select, textarea', function(){
  const parentForm = $(this).closest('form')
  const submit = parentForm.find('[type="submit"]')

  if (parentForm.parsley().isValid()) {
    submit.removeClass('disabled')
  } else {
    submit.addClass('disabled')
  }
});

$form.parsley()

window.Parsley.on('field:error', (e) => {
  // Scroll to hidden errors if error isnt in view
  e.element.scrollIntoView();
});

$('form').on('submit', e => {
  e.preventDefault()
  console.log('form submission: ', $(e.target).serialize())
})

plansoptions.on('change', (e) => {
  const input = plansoptions.find('[type="radio"]:checked');
  const inputName = $(e.currentTarget).find('input')[0].name
  const currentOptions = plansoptions.find(`[name=${inputName}]`);

  $('.plan-option').removeClass('border-blue-light');

  input.closest('.plan-option').addClass('border-blue-light')

  // BY DEFAULT ALL OPTIONS WILL HAVE OPACITY OF 1;
  // ON SELECT, INPUTS WITH THE SAME NAME WILL HAVE OPACITY OF .6;
  currentOptions.each((i, el) => {

    const option = $(el).closest('.plan-option');
    option.removeClass('is-selected')
    option.removeClass('not-selected')

    if (option.hasClass('border-blue-light')) {
      option.addClass('is-selected')
    } else {
      option.addClass('not-selected')
    }

  })


});

// By default - Set Devices to 1 onload
$('[name="devices"]').filter('[value="1 device"]').prop('checked', true);

deviceCard.on('change', (e) => {
  const input = deviceCard.find('[name="devices"]:checked');
  $('.device-card').removeClass('bg-blue-dark');
  $(e.currentTarget).toggleClass('bg-blue-dark');

  if ($(e.currentTarget).data('activation-fee')) {
    const fee = $(e.currentTarget).data('activation-fee');
    $('.activation-fee').removeClass('hidden');
    $('.activation-fee .amount').html(fee);
  } else {
    $('.activation-fee').addClass('hidden');
  }

});

// data-not-required="true"
function checkRequired(input) {
  if ($(input).data("not-required") === true) {
    $(input).prop("required", false)
  } else {
    $(input).prop("required", true)
  }
}

paymentMethod.on('change', e => {

  if (e.currentTarget.value !== 'credit-card') {
    $('.credit-card').addClass('hidden')
    $('.eft').removeClass('hidden')

    $('.credit-card input').prop('required',false)
    $('.eft input').each((i,el) => checkRequired(el))

  } else {
    $('.credit-card').removeClass('hidden')
    $('.eft').addClass('hidden')

    $('.eft input').prop('required',false)
    $('.credit-card input').each((i,el) => checkRequired(el))

  }

})

$("[data-toggle-form]").each((i, x) => {
  $(x).change((el) => {
    let currentForm = $(x).data('toggle-form')

    if (el.currentTarget.checked) {
      $(`.${currentForm}`).addClass('hidden')
      $(`.${currentForm} input`).prop("required", false)
      $(`.${currentForm} select`).prop("required", false)
    } else {
      $(`.${currentForm}`).removeClass('hidden')
      $(`.${currentForm} input`).each((i,el) => checkRequired(el))
      $(`.${currentForm} select`).each((i,el) => checkRequired(el))
    }

  })
})
