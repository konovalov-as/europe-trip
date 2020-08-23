'use strict';
(function () {
  function showTab(evt) {
    document.querySelector('.js-tab--show').classList.remove('js-tab--show');
    document.querySelector('.js-tab--active').classList.remove('js-tab--active');

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

})();
