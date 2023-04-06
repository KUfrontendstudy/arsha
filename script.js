'use strict';

const accordions = document.querySelectorAll('.why-us__item__header');

// FIXME: 동시에 변하질 않음
accordions.forEach((accordion) =>
  accordion.addEventListener('click', (e) => {
    accordions.forEach((accordion) => {
      if (accordion === e.currentTarget) {
        e.currentTarget.nextElementSibling.classList.toggle('active');
        e.currentTarget.querySelector('.chevron-up').classList.toggle('hidden');
        e.currentTarget
          .querySelector('.chevron-down')
          .classList.toggle('hidden');
        return;
      }
      if (accordion.nextElementSibling.classList.contains('active')) {
        accordion.nextElementSibling.classList.remove('active');
        accordion.querySelector('.chevron-up').classList.add('hidden');
        accordion.querySelector('.chevron-down').classList.remove('hidden');
      }
    });
  })
);
