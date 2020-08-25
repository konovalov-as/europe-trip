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

  // modal window
  var modalOpenButtons = document.querySelectorAll('.country__link');
  var modal = document.querySelector('.modal');
  modalOpenButtons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
    });
  });

  var modalCloseButton = modal.querySelector('.modal__close');
  modalCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--show');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key !== 'Escape') {
      return;
    }
    modal.classList.remove('modal--show');
  });

  modal.addEventListener('click', function (evt) {
    if (evt.target.classList[0] !== 'modal') {
      return;
    }
    modal.classList.remove('modal--show');
  });

  var modalForm = modal.querySelector('.modal__form');
  modalForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    // console.log('Форма успешно отправлена');
  });


})();
