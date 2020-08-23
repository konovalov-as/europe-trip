'use strict';
(function () {
  function showTab(evt) {
    document.querySelector('.tab--show').classList.remove('tab--show');
    document.querySelector('.tab--active').classList.remove('tab--active');

    var evtButton = evt.target;
    evtButton.classList.add('tab--active');
    var buttonClass = evt.target.classList[1];
    var content = document.querySelectorAll('.' + buttonClass)[1];
    content.classList.add('tab--show');
  }

  function defaultHide() {
    var a = document.querySelectorAll('.content');
    a.forEach(function addClass(info) {
      info.classList.add('js-default-hide');
    });
  }

  var tabButton = document.querySelectorAll('button.tab');
  tabButton.forEach(function (button) {
    button.addEventListener('click', showTab);
  });

  window.addEventListener('load', defaultHide);

})();
