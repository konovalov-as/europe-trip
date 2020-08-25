'use strict';

(function () {
  // switch tabs
  function hideCurrentTab() {
    document.querySelector('.js-tab--show').classList.remove('js-tab--show');
    document.querySelector('.js-tab--active').classList.remove('js-tab--active');
  }

  function showTab(evt) {
    hideCurrentTab();
    var evtButton = evt.target;
    evtButton.classList.add('js-tab--active');
    var buttonClass = evt.target.classList[1];
    var content = document.querySelectorAll('.' + buttonClass)[1];
    content.classList.add('js-tab--show');
  }

  function hideTabs() {
    var tabs = document.querySelectorAll('.js-content');
    tabs.forEach(function (tab) {
      tab.classList.add('js-tab--hide');
    });
  }

  var tabButton = document.querySelectorAll('button.js-tab');
  tabButton.forEach(function (button) {
    button.addEventListener('click', showTab);
  });

  window.addEventListener('load', hideTabs);

  // go to tab
  var cards = document.querySelectorAll('.places-visit__link');
  cards.forEach(function (card) {
    card.addEventListener('click', function (evt) {
      hideCurrentTab();
      var tabTargetId = evt.target.closest('.places-visit__link').attributes.href.value.slice(1);
      var targetButton = document.querySelector('.' + tabTargetId);
      targetButton.classList.add('js-tab--active');
      var tatTarget = document.querySelector('#' + tabTargetId);
      tatTarget.classList.add('js-tab--show');
    });
  });

  // country modal window
  function validateModalPhone() {
    var isValidPhone = false;
    var modalPhoneError = modal.querySelector('.modal__input-error--phone');
    if (modalPhone.validity.badInput) {
      modalPhoneError.classList.remove('modal__input-error--hidden-phone');
    } else if (modalPhone.value === null) {
      modalPhoneError.classList.remove('modal__input-error--hidden-phone');
    } else if (modalPhone.value.length !== 10) {
      modalPhoneError.classList.remove('modal__input-error--hidden-phone');
    } else {
      modalPhoneError.classList.add('modal__input-error--hidden-phone');
      isValidPhone = true;
      localStorage.setItem('modalPhone', modalPhone.value);
    }
    return isValidPhone;
  }

  function validateModalEmail() {
    var isValidEmail = false;
    var modalEmailError = modal.querySelector('.modal__input-error--email');
    if (modalEmail.validity.typeMismatch) {
      modalEmailError.classList.remove('modal__input-error--hidden-email');
    } else if (modalEmail.value === '') {
      modalEmailError.classList.remove('modal__input-error--hidden-email');
    } else {
      modalEmailError.classList.add('modal__input-error--hidden-email');
      isValidEmail = true;
      localStorage.setItem('modalEmail', modalEmail.value);
    }
    return isValidEmail;
  }

  var modalOpenButtons = document.querySelectorAll('.country__link');
  var modal = document.querySelector('.modal');

  var modalPhone = modal.querySelector('input[name=modal-phone]');
  var modalEmail = modal.querySelector('input[name=modal-email]');

  // open modal
  modalOpenButtons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
      modalPhone.focus();
      modalPhone.value = localStorage.getItem('modalPhone');
      modalEmail.value = localStorage.getItem('modalEmail');
    });
  });

  // input phone and email
  modalPhone.addEventListener('input', function () {
    validateModalPhone();
  });
  modalEmail.addEventListener('input', function () {
    validateModalEmail();
  });

  // hide modal by closing button
  var modalCloseButton = modal.querySelector('.modal__close');
  modalCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--show');
    hideSuccessMessage();
  });

  // by Escape key
  document.addEventListener('keydown', function (evt) {
    if (evt.key !== 'Escape') {
      return;
    }
    modal.classList.remove('modal--show');
    hideSuccessMessage();
  });

  // by click overlay
  modal.addEventListener('click', function (evt) {
    if (evt.target.classList[0] !== 'modal') {
      return;
    }
    modal.classList.remove('modal--show');
    hideSuccessMessage();
  });

  // success modal message
  var modalForm = modal.querySelector('.modal__form');
  var successModal = modal.querySelector('.modal__success');

  function hideSuccessMessage() {
    modalForm.classList.remove('modal__form--hidden');
    successModal.classList.add('modal__success--hidden');
  }

  // submit modal form
  modalForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (validateModalPhone() && validateModalEmail()) {
      modalForm.classList.add('modal__form--hidden');
      successModal.classList.remove('modal__success--hidden');
    }
  });

  // price success modal
  var buyButtons = document.querySelectorAll('.package__buy');
  buyButtons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
    });
  });

  // Do you have any questions? callback form
  // Validate phone and email
  function validateFromPhone() {
    var isValidPhone = false;
    var formPhoneError = callbackForm.querySelector('.form__input-error--phone');
    if (formPhone.validity.badInput) {
      formPhoneError.classList.remove('form__input-error--hidden-phone');
    } else if (formPhone.value === null) {
      formPhoneError.classList.remove('form__input-error--hidden-phone');
    } else if (formPhone.value.length !== 10) {
      formPhoneError.classList.remove('form__input-error--hidden-phone');
    } else {
      formPhoneError.classList.add('form__input-error--hidden-phone');
      isValidPhone = true;
      localStorage.setItem('formPhone', formPhone.value);
    }
    return isValidPhone;
  }

  function validateFormEmail() {
    var isValidEmail = false;
    var formEmailError = callbackForm.querySelector('.form__input-error--email');
    if (formEmail.validity.typeMismatch) {
      formEmailError.classList.remove('form__input-error--hidden-email');
    } else if (formEmail.value === '') {
      formEmailError.classList.remove('form__input-error--hidden-email');
    } else {
      formEmailError.classList.add('form__input-error--hidden-email');
      isValidEmail = true;
      localStorage.setItem('formEmail', formEmail.value);
    }
    return isValidEmail;
  }

  var callbackForm = document.querySelector('.form__item');
  var formPhone = callbackForm.querySelector('input[name=phone');
  var formEmail = callbackForm.querySelector('input[name=email');

  // submit callback form
  var successCallback = document.querySelector('.modal--success');
  callbackForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (validateFromPhone() && validateFormEmail()) {
      successCallback.classList.add('modal--show');
    }
  });

  // by close button
  var formCloseButton = successCallback.querySelector('.modal__close--success');
  formCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    successCallback.classList.remove('modal--show');
  });

  // by esc key
  document.addEventListener('keydown', function (evt) {
    if (evt.key !== 'Escape') {
      return;
    }
    successCallback.classList.remove('modal--show');
  });

  // by click overlay
  successCallback.addEventListener('click', function (evt) {
    if (evt.target.classList[1] !== 'modal--success') {
      return;
    }
    successCallback.classList.remove('modal--show');
  });

  // input phone and email / callback form
  formPhone.addEventListener('input', function () {
    validateFromPhone();
  });
  formEmail.addEventListener('input', function () {
    validateFormEmail();
  });

  formPhone.value = localStorage.getItem('formPhone');
  formEmail.value = localStorage.getItem('formEmail');

  // -------------

})();
