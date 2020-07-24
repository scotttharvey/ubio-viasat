window.addEventListener('DOMContentLoaded', () => {

  const modalTriggers = document.querySelectorAll('[data-modal-trigger]')
  const modalContent = document.querySelectorAll('[data-modal-content]')

  const closeModals = () => {
    document.querySelectorAll(`[data-modal-content]`).forEach(modal => {
      modal.classList.add('hidden')
    })
  }

  const toggleModal = e => {

    if (e.target.dataset.modalTrigger === 'close') {
      closeModals()
    } else {
      document.querySelector(`[data-modal-content="${e.target.dataset.modalTrigger}"]`).classList.remove('hidden')
    }

  }

  if (modalTriggers) {
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', toggleModal)
    })
  }

  if (modalContent) {
    modalContent.forEach(content => {
      content.children[0].addEventListener('click', e => {
        e.stopPropagation();
      })
    })
  }

  // If user clicks anywhere outside of the modal, close it
  window.onclick = e => {
    if (!e.target.dataset.modalTrigger ) {
      closeModals()
    }
  }

});

