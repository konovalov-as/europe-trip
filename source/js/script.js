'use strict';
(function () {
  function showTab(event) {
    document.querySelector('.tab--show').classList.remove('tab--show');
    document.querySelector('.tab--active').classList.remove('tab--active');

    var button = event.target;
    button.classList.add('tab--active');
    var buttonClass = event.target.classList[1];
    var content = document.querySelectorAll('.' + buttonClass)[1];
    content.classList.add('tab--show');
  }

  function defaultHide() {
    var a = document.querySelectorAll('.content');
    a.forEach(function addClass(info) {
      info.classList.add('js-default-hide');
    });
  }

  var tabButton = document.getElementsByClassName('tab');

  for (var i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener('click', showTab);
  }

  window.addEventListener('load', defaultHide);

})();
